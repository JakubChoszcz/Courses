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
    readonly city: string = "Warsaw"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ) {
    }
}

const jakub = new User("jc@jc.jc", "Jakub")
// jakub.city = "Warsaw"
// jakub.name
// jakub.getCity();
