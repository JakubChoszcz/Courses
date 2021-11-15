// const fib = (num, memo={}) => {
//     if (num in memo) return memo[num];

//     if (num <= 2) {
//         return 1
//     } else {
//         memo[num] = fib(num - 1, memo) + fib(num - 2, memo)
//         return memo[num]
//     }
// }

// console.log(fib(50))





// const gridTraveler = (c, r, memo={}) => {
//     const key = c + ',' + r;
//     if (key in memo) return memo[key]

//     if (c === 0 || r === 0) return 0;
//     if (c === 1 && r === 1) return 1;

//     memo[key] = gridTraveler(c - 1, r, memo) + gridTraveler(c, r - 1, memo)
//     return memo[key]
// }

// console.log(gridTraveler(14, 14))





// const canSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum];

//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;

//     for (const num of numbers) {
//         const reminder = targetSum - num
//         if (canSum(reminder, numbers, memo) === true) {
//             memo[targetSum] = true;
//             return true;
//         }
//     }

//     memo[targetSum] = false;
//     return false
// }

// console.log(canSum(300, [15, 7]))





// const howSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum]

//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     for (const num of numbers) {
//         const reminder = targetSum - num
//         const reminderResult = howSum(reminder, numbers)
//         if (reminderResult !== null) {
//             memo[reminderResult] = [ ...reminderResult, num]
//             return memo[reminderResult]
//         }
//     }

//     memo[targetSum] = null;
//     return null;
// }

// console.log(howSum(7, [2, 3, 4, 5]))





// const bestSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum]

//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     let shortestCombination = null;

//     for (let num of numbers) {
//         const remainder = targetSum - num
//         const remainderCombination = bestSum(remainder, numbers, memo)
//         if (remainderCombination !== null) {
//             const combination = [ ...remainderCombination, num ]
//             if (shortestCombination === null || shortestCombination.length > combination.length) {
//                 shortestCombination = combination;
//             }
//         }
//     }

//     memo[targetSum] = shortestCombination
//     return shortestCombination
// }

// console.log(bestSum(7, [2, 3, 4, 7]))





// const canConstruct = (target, wordBank, memo={}) => {
//     if (target in memo) return memo[target];

//     if (target === '') return true;

//     for (const word of wordBank) {
//         if (target.indexOf(word) === 0){
//             const suffix = target.slice(word.length);
//             if (canConstruct(suffix, wordBank, memo) === true) {
//                 memo[target] = true;
//                 return true;
//             }
//         }
//     }

//     memo[target] = false
//     return false
// }

// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeeef']))





// const countConstruct = (target, wordBank, memo={}) => {
//     if (target in memo) return memo[target];

//     if (target === '') return 1;

//     let totalCount = 0;

//     for (const word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
//             totalCount += numWaysForRest;
//         }
//     }

//     return totalCount;
// }

// console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))





// const allConstruct = (target, wordBank, memo={}) => {
//     if (target in memo) return memo[target]
//     if (target === '') return [[]];

//     const result = []

//     for (const word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             const suffixWays = allConstruct(suffix, wordBank, memo);
//             const targetWays = suffixWays.map(way => [ word, ...way ])
//             result.push(...targetWays)
//         }
//     }

//     memo[target] = result
//     return result
// }

// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))