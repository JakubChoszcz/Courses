TypeScript takes JavaScript and adds new Features.

Browser can't execute TypeScript and Node.js.

TypeScript is a programming language, powerfull compiler, it gives extra error checking too.

Inputs in JS always have typeof = string

TS's type system only helps you during development (before the code gets compiled).

The key difference is: JS uses 'dynamic types' (resolved at runtime), TS uses 'static types' (set during development).

==== Commands ====

npm i -g typescript

tsc using-ts.ts - compiles TS to JS

==== Core Types ====

number - 1, 5.3, 10;
string - 'Hi', "Hi", `Hi`;
boolean - true, false;
object - {age: 30};
array - [1, 2, 3]; <= string[] / number[] / any[] / ...
tuple - [1, 2] <= fixed-length array
enum - enum {NEW, OLD} <= automatically enumerated global constant identifiers
any - * <= any kind of value, no specific type assignment. Try avoid any whenever you can
union <= number | string | ... <= allows to combine many types
literal <= certain values
alias - type Combinable = number | string | ... | 'string' | 2022 <= combine unions
void - 'this function DOESN'T have a return statement it', returns undefined, use is when a function returns nothing
function - Function / (num: number, str: string, ...) => void - forces a variable to be an function
unknown - similar to the any type, but add types checking
never - never - use it when you're sure, that a code will never occur / return anything