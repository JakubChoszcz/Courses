"use strict";
class User {
    constructor(email, name) {
        this.city = "Warsaw";
        this.email = email;
        this.name = name;
    }
}
const jakub = new User("jc@jc.jc", "Jakub");
// jakub.city = "Warsaw"
jakub.city;
