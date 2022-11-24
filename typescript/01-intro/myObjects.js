"use strict";
exports.__esModule = true;
var User = {
    name: "Jakub",
    email: "hitesh@lco.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Jakub", isPaid: false };
createUser(newUser);
function createCourse(_a) {
    var string = _a.name, _b = _a.price, number = _b === void 0 ? 0 : _b;
    return { name: 'typescript', price: 399 };
}
