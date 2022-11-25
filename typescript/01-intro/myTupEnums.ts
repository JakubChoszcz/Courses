// const user: (string | number)[] = [1, "Jakub"]
let user: [string, number, boolean]
user = ["Jakub", 1, true]

let rgb: [number, number, number]
rgb = [64, 128, 256]

type User = [number, string]
let newUser: User = [21, "Jakub"]

newUser[1] = "Dariusz"
// newUser.push(true)

export {}