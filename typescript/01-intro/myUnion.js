"use strict";
exports.__esModule = true;
var score = 33;
score = 44;
score = "55";
var Jakub = {
    name: "Jakub", id: 123
};
Jakub = {
    username: "CJ", id: 234
};
// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is ${id}`);
// }
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("3");
var data = [1, 2, 3,];
var data2 = ["1", "2", "3"];
var data3 = [false, "", 3];
var pi = 3.14;
var seatAllotment;
seatAllotment = "aisle";
