let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Word';

if (typeof userInput === 'string') {
    userName = userInput;
}

const generateError = (message: string, code: number): never => {
    throw {message: message, errorCode: code};
    // while (true) {}
}

const result = generateError('An error occured!', 500);
console.log(typeof result);
