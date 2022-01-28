console.clear();





// // PROCEDURAL

// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//     return baseSalary + (overtime * rate);
// }

// console.log(typeof getWage(baseSalary, overtime, rate));





// // OOP - Encapsulation

// let employee = {
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     getWage: function() {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// }

// console.log(employee);





// // Creating Object

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// }

// circle.draw();

// // radius and location are properties, draw is a method





// // Factories

// const createCircle = (radius) => {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     }
// }
// const circle = createCircle(1);

// circle.draw();





// // Constructors

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.draw = function () {
//             console.log('draw');
//         };
//     }
// }
// const another = new Circle(1);

// another.draw();





// // Constructor Property

// let x = {};





// // Functions are Objects

// class Circle {
//     constructor(radius) {
//         this.radius = radius,
//         this.draw = function() {
//             console.log('draw');
//         }
//     }
// }
// const another = new Circle(1);





// // Prototypes

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// // ================

// let obj = { value: 10 };

// const increase = (obj) => {
//     obj.value++;
// }

// increase(obj);





// // Adding/Removing Properties

// class Circle {
//     constructor(radius) {
//         this.radius = radius,
//         this.draw = function() {
//             console.log('draw');
//         }
//     }
// }

// const circle = new Circle(1);

// circle.location = { x: 1 };

// const propertyName =  'center location';
// circle[propertyName] = { x: 2 };

// delete circle[propertyName];

// console.log(circle);





// // Enumerating Properties

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.draw = function() {
//             console.log('draw');
//         }
//     }
// };

// const circle = new Circle(10);

// // To enumarate all members and objects
// for (let key in circle) {
//     if (typeof circle[key] !== 'function') {
//         console.log(key, circle[key]);
//     }
// }

// // To get all keys
// const keys = Object.keys(circle);
// console.log(keys);

// // To check an existence of a property or a method
// if ('radius' in circle) {
//     console.log('Circle has a radius');
// }





// // Abstraction

// class Circle {
//     constructor(radius) {
//         this.radius = radius;

//         this.defaultLocation = { x: 0, y: 0 };

//         this.computeOptimumLocation = function(factor) {
//             // ...
//         };

//         this.draw = function() {
//             this.computeOptimumLocation(0.1);

//             console.log('draw');
//         };
//     }
// }

// const circle = new Circle(10);
// circle.draw();





// // Private Properties and Methods

// class Circle {
//     constructor(radius) {
//         this.radius = radius;

//         let defaultLocation = { x: 0, y: 0 };

//         const computeOptimumLocation = (factor) => {
//             // ...
//         };

//         this.draw = function() {
//             let x, y;

//             computeOptimumLocation(0.1);

//             console.log('draw');
//         };
//     }
// };

// const circle = new Circle(10);
// circle.draw();





// // Getters/Setters

// class Circle {
//     constructor(radius) {
//         this.radius = radius;

//         let defaultLocation = { x: 0, y: 0 };

//         this.getDefaultLocation = function() {
//             return defaultLocation;
//         };

//         this.draw = function() {
//             console.log('draw');
//         };

//         Object.defineProperty(this, 'defaultLocation', {
//             get: function() {
//                 return defaultLocation;
//             },
//             set: function(value) {
//                 if (!value.x || !value.y) {
//                     throw new Error('Invalid location.');
//                 }

//                 defaultLocation: value;
//             }
//         })
//     }
// };

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw();





// Exercise

class Stopwatch {
    constructor() {
        let startTime, endTime, running, duration = 0;

        this.start = function() {
            if (running) {
                throw new Error('Stopwatch has already started.');
            }

            running = true;

            startTime = new Date();
        };

        this.stop = function() {
            if (!running) {
                throw new Error('Stopwatch has already stopped.');
            }

            running = false;
            
            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        };

        this.reset = function() {
            startTime = null;
            endTime = null;
            running = false;
            duration = 0;
        };

        Object.defineProperty(this, 'duration', {
            get: function() {
                return duration;
            }
        })
    }
}

const sw = new Stopwatch();