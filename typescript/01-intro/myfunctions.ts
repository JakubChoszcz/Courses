function addTwo(num: number): number {
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPadin: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let value = addTwo(5)
getUpper("string")
signUpUser("name", "email@gmail.com", true)
loginUser("name", "email@gmail.com")

// function getValue(myVal: number): boolean | string {
//     if (myVal > 5) {
//         return true
//     }

//     return "200 OK"
// }

const getHello = (s: string): string => {
    return "Hello"
}

const heroes = ["thor", "spiderman", "ironman"]
// const heroes = [1, 2, 3]

heroes.map((hero: string): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw console.log(errmsg);
}

export {}