class User {
    email: string
    name: string
    readonly city: string = "Warsaw"

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const jakub = new User("jc@jc.jc", "Jakub")
// jakub.city = "Warsaw"
jakub.city