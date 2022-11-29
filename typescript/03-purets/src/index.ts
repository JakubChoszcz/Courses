// class User {
//     public email: string
//     private name: string
//     private readonly city: string = "Warsaw"

//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }

//     getCity = () => {
//         return this.city;
//     }
// }

class User {
    private _courseCount = 1
    readonly city: string = "Warsaw"
    constructor(
        public email: string, 
        public name: string,
        ) {
    }

    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEamil(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }

        this._courseCount = courseNum
    }
}

const jakub = new User("jc@jc.jc", "Jakub")
// jakub.city = "Warsaw"
// jakub.name
// jakub.getCity();
// jakub.deleteToken();