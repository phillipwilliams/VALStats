package main

import (
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
    "os"
)


func checkVALAccount(name string, tag string){
    requestURL := "https://api.henrikdev.xyz/valorant/v1/account/" + name + "/" + tag 
    
    response, err := http.Get(requestURL)
    if err != nil {
        fmt.Print(err.Error())
        os.Exit(1)
    }

    responseData, err := ioutil.ReadAll(response.Body)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(string(responseData))
}

func main(){
    var valname string
    var valregion string
    fmt.Println("Enter your VALORANT ID: ")
    fmt.Scanln(&valname) 

    for len(valregion) != 3{
    fmt.Println("Enter your VALORANT ID Region tag (Ex: NA1): ")
    fmt.Scanln(&valregion)  
    }


    checkVALAccount(valname, valregion)

    
}

