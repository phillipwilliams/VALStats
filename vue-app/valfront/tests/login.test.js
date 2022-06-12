import { expect, test} from "vitest"

const user = {
    name: "Tyler",
    age: 24,
}

test("Tyler is 24", () =>{
    expect(user.name).toBe("Tyler");
    expect(user.age).toBe(24);
});