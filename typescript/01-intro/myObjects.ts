// const User = {
//     name: "Jakub",
//     email: "hitesh@lco.dev",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: "Jakub", isPaid: false}

// createUser(newUser)

// function createCourse({name: string, price: number = 0}):{name: string, price: number}{
//     return {name: 'typescript', price: 399}
// }

// type aliasses
// type bool = boolean

// type User = {
//     name: string;
//     email: string;
//     isActive: bool
// }

// function createUser(user: User): User {
//     return {
//         name: user.name,
//         email: user.email,
//         isActive: user.isActive
//     }
// }

// createUser({name: "Jakub", email: "", isActive: true})

// readonly
type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: number
}

let myUser: User = {
    _id: "1234",
    name: "n",
    email: "e",
    isActive: false,
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDeatils = cardNumber & cardDate & {
    cvv: number
}

const myCard: cardDeatils = {
    cardNumber: "1234",
    cardDate: "2022.11.24",
    cvv: 1234
}

myUser.email = "e"
// myUser._id = "5678" 

// function createUser(u: User) {}

export {}