// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Jakub',
//     age: 20,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const person = {
//     name: 'Jakub',
//     age: 20,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2

// enum Role { ADMIN, READ_ONLY, AUTHOR };
enum Role { ADMIN = 'Admin', READ_ONLY = 6, AUTHOR = 'Author' };

// console.log(Role);

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: any;
} = {
    name: 'Jakub',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};

// const person = {
//     name: 'Jakub',
//     age: 20,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN
// };





let favoriteActivities: string[];
favoriteActivities = ['Sports'];

person.role.push('admin');
person.role[0] = 10;
person.role = [3, 'just a string', 'error'];

// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 2022];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! map doesn't work on strings !!!
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}