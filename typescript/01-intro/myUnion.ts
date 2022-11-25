let score: number | string = 33

score = 44

score = "55"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let Jakub: User | Admin = {
    name: "Jakub", id: 123
}

Jakub = {
    username: "CJ", id: 234
}

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is ${id}`);
// }

function getDbId(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase()
    }
}

getDbId(3)
getDbId("3")

const data: number[] = [1, 2 ,3,]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = [false, "" ,3]

let pi: 3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"

export {}