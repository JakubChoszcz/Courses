"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Warsaw";
    }
}
const jakub = new User("jc@jc.jc", "Jakub");
// jakub.city = "Warsaw"
// jakub.name
// jakub.getCity();
