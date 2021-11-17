// // ===========================================================================
// // =============================== Memoization ===============================
// // =========================================================================== 





// const fib = (num, memo={}) => {
//     if (num in memo) return memo[num];

//     if (num <= 2) {
//         return 1;
//     } else {
//         memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
//         return memo[num];
//     }
// }

// console.log(fib(50));





// const gridTraveler = (r, c, memo={}) => {
//     const key = r + ',' + c;
//     if (key in memo) return memo[key];

//     if (c === 0 || r === 0) return 0;
//     if (c === 1 && r === 1) return 1;

//     memo[key] = gridTraveler(r - 1, c, memo) + gridTraveler(r, c - 1, memo);
//     return memo[key];
// }

// console.log(gridTraveler(14, 14));





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
//     return false;
// }

// console.log(canSum(300, [15, 7]));





// const howSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum];

//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     for (const num of numbers) {
//         const reminder = targetSum - num;
//         const reminderResult = howSum(reminder, numbers);
//         if (reminderResult !== null) {
//             memo[reminderResult] = [ ...reminderResult, num];
//             return memo[reminderResult];
//         }
//     }

//     memo[targetSum] = null;
//     return null;
// }

// console.log(howSum(7, [2, 3, 4, 5]));





// const bestSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum];

//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     let shortestCombination = null;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderCombination = bestSum(remainder, numbers, memo);
//         if (remainderCombination !== null) {
//             const combination = [ ...remainderCombination, num ]
//             if (shortestCombination === null || shortestCombination.length > combination.length) {
//                 shortestCombination = combination;
//             }
//         }
//     }

//     memo[targetSum] = shortestCombination;
//     return shortestCombination;
// }

// console.log(bestSum(7, [2, 3, 4, 7]));





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

//     memo[target] = false;
//     return false;
// }

// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeeef']));





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

// console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));





// const allConstruct = (target, wordBank, memo={}) => {
//     if (target in memo) return memo[target];
//     if (target === '') return [[]];

//     const result = [];

//     for (const word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             const suffixWays = allConstruct(suffix, wordBank, memo);
//             const targetWays = suffixWays.map(way => [ word, ...way ]);
//             result.push(...targetWays);
//         }
//     }

//     memo[target] = result;
//     return result;
// }

// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));





// // ==========================================================================
// // =============================== Tabulation =============================== 
// // ==========================================================================





// const fib = (n) => {
//     const table = Array(n + 1).fill(0);
//     table[1] = 1;
//     for (let i = 0; i <= n; i++) {
//         table[i + 1] += table[i];
//         table[i + 2] += table[i];
//     }
//     return table[n];
// }

// console.log(fib(8));





// const gridTraveler = (r, c) => {
//     const table = Array(r + 1)
//         .fill()
//         .map(() => Array(c + 1).fill(0));
//     table[1][1] = 1;

//     for(let i = 0; i <= r; i++) {
//         for(let j = 0; j <= c; j++) {
//             const current = table[i][j];
//             if (i + 1 <= r) table[i + 1][j] += current;
//             if (j + 1 <= c) table[i][j + 1] += current;
//         }
//     }

//     return table[r][c];
// }

// console.log(gridTraveler(18, 18));





// const canSum = (targetSum, numbers) => {
//     const table = Array(targetSum + 1).fill(false);
//     table[0] = true;

//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] === true) {
//             for (const num of numbers) {
//                 table[i + num] = true;
//             }
//         }
//     }

//     return table[targetSum];
// }

// console.log(canSum(300, [7, 14]));





// const howSum = (targetSum, numbers) => {
//     const table = Array(targetSum + 1).fill(null);
//     table[0] = [];

//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] !== null) {
//             for (let num of numbers) {
//                 table[i + num] = [ ...table[i], num];
//             }
//         }
//     }

//     return table[targetSum];
// }

// console.log(howSum(8, [5, 3, 4, 7]));





// const bestSum = (targetSum, numbers) => {
//     const table = Array(targetSum + 1).fill(null);
//     table[0] = [];

//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] !== null) {
//             for (let num of numbers) {
//                 const combination = [ ...table[i], num];

//                 if (!table[i + num] || table[i + num] < combination.length) {
//                     table[i + num] = combination;
//                 }
//             }
//         }
//     }

//     return table[targetSum];
// }

// console.log(bestSum(100, [25, 1, 5, 2]));





// const canConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1).fill(false);
//     table[0] = true;

//     for (let i = 0; i <= target.length; i++) {
//         if (table[i] === true) {
//             for (let word of wordBank) {
//                 if (target.slice(i, i + word.length) === word) {
//                     table[i + word.length] = true;
//                 }
//             }
//         }
//     }

//     return table[target.length];
// }

// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));





// const countConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1).fill(0);
//     table[0] = 1;

//     for (let i = 0; i <= target.length; i++) {
//         if (table[i] !== 0) {
//             for (let word of wordBank) {
//                 if (target.slice(i, i + word.length) === word) {
//                     table[i + word.length] += table[i];
//                 }
//             }
//         }
//     }

//     return table[target.length];
// }

// console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));





// const allConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1)
//         .fill()
//         .map(() => []);
//     table[0] = [[]];

//     for (let i = 0; i <= target.length; i++) {
//         for (let word of wordBank) {
//             if (target.slice(i, i + word.length) === word) {
//                 const newCombinations = table[i].map(subArray => [ ...subArray, word ]);
//                 table[i + word.length].push(...newCombinations);
//             }
//         }
//     }

//     return table[target.length];
// }

// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));