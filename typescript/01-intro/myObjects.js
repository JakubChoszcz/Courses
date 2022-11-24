"use strict";
// const User = {
//     name: "Jakub",
//     email: "hitesh@lco.dev",
//     isActive: true
// }
exports.__esModule = true;
function createUser(user) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
}
createUser({ name: "Jakub", email: "", isActive: true });
