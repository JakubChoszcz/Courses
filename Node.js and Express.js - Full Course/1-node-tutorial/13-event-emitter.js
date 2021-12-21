const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user name ${name}, with id${id}`);
})

customEmitter.on('response', () => {
    console.log(`some other logic here `);
})

customEmitter.emit('response', 'john', 34);

// ================================

const { readFile, writeFile } = require('fs').promises;
// const uril = require('util');
// const readFilePromise = uril.promisify(readFile);
// const writeFilePromise = uril.promisify(writeFile);

const start = async() => {
    try {
        const first = await readFile('./content/first.txt');
        const second = await readFile('./content/second.txt');

        await writeFile(
            './content/result-mind-grenade.txt', 
            `THIS IS AWESOME: ${first}, ${second}\n`,
            { flag: 'a' }
        )

        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, res) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(res);
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))