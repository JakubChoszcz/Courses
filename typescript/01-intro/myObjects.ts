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

type bool = boolean

type User = {
    name: string;
    email: string;
    isActive: bool
}

function createUser(user: User): User {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    }
}

createUser({name: "Jakub", email: "", isActive: true})

export {}