var userInput;
var userName;
userInput = 5;
userInput = 'Word';
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
};
var result = generateError('An error occured!', 500);
console.log(typeof result);
