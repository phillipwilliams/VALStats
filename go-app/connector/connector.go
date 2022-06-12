package connector

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"net"
	"os"

	"cloud.google.com/go/cloudsqlconn"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/stdlib"
)

func connectWithConnector() (*sql.DB, error) {
	mustGetenv := func(k string) string {
		v := os.Getenv(k)
		if v == "" {
			log.Fatalf("Warning: %s environment variable not set.\n", k)
		}
		return v
	}
	// Note: Saving credentials in environment variables is convenient, but not
	// secure - consider a more secure solution such as
	// Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
	// keep secrets safe.
	var (
		// Either a DB_USER or a DB_IAM_USER should be defined. If both are
		// defined, DB_IAM_USER takes precedence.
		dbUser                 = os.Getenv("postgres")                                   // e.g. 'my-db-user'
		dbIAMUser              = os.Getenv("DB_IAM_USER")                                // e.g. 'sa-name@project-id.iam'
		dbPwd                  = mustGetenv("postgres")                                  // e.g. 'my-db-password'
		dbName                 = mustGetenv("valstatsdb")                                // e.g. 'my-database'
		instanceConnectionName = mustGetenv("gleaming-aegis-297618:us-east1:valstatsdb") // e.g. 'project:region:instance'
		usePrivate             = os.Getenv("PRIVATE_IP")
	)
	if dbUser == "" && dbIAMUser == "" {
		log.Fatal("Warning: One of DB_USER or DB_IAM_USER must be defined")
	}

	dsn := fmt.Sprintf("user=%s password=%s database=%s", dbUser, dbPwd, dbName)
	config, err := pgx.ParseConfig(dsn)
	if err != nil {
		return nil, err
	}
	config.DialFunc = func(ctx context.Context, network, instance string) (net.Conn, error) {
		if dbIAMUser != "" {
			d, err := cloudsqlconn.NewDialer(ctx, cloudsqlconn.WithIAMAuthN())
			if err != nil {
				return nil, err
			}
			return d.Dial(ctx, instanceConnectionName)
		}
		if usePrivate != "" {
			d, err := cloudsqlconn.NewDialer(
				ctx,
				cloudsqlconn.WithDefaultDialOptions(cloudsqlconn.WithPrivateIP()),
			)
			if err != nil {
				return nil, err
			}
			return d.Dial(ctx, instanceConnectionName)
		}
		// Use the Cloud SQL connector to handle connecting to the instance.
		// This approach does *NOT* require the Cloud SQL proxy.
		d, err := cloudsqlconn.NewDialer(ctx)
		if err != nil {
			return nil, err
		}
		return d.Dial(ctx, instanceConnectionName)
	}
	dbURI := stdlib.RegisterConnConfig(config)
	dbPool, err := sql.Open("pgx", dbURI)
	if err != nil {
		return nil, fmt.Errorf("sql.Open: %v", err)
	}
	return dbPool, nil
}
