"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPadin) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var value = addTwo(5);
getUpper("string");
signUpUser("name", "email@gmail.com", true);
loginUser("name", "email@gmail.com");
// function getValue(myVal: number): boolean | string {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "Hello";
};
var heroes = ["thor", "spiderman", "ironman"];
// const heroes = [1, 2, 3]
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw console.log(errmsg);
}
