// Data Types Practice
let x = 10;
let b = 10.20;
let y = true;
let z = "hello";
let n = null;
let udefine;
let big = 123456789012345678901234567890n;
let sym = Symbol("id");
console.log(typeof x);
console.log(typeof b);
console.log(typeof y);
console.log(typeof z);
console.log(typeof n);
console.log(typeof udefine);
console.log(typeof sym);
console.log(typeof big);

// Object and Reference Practice
let direct = {name: "John"};
console.log(direct.name);
let direct1 = direct;
direct1.name = "Doe";
console.log(direct.name);

let sp = {name: "Ktk"};
console.log(sp.name);
let sp1 = {...sp};
sp1.name = "Ktr";
console.log(sp.name);
console.log(sp1.name);

// Array Copying
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; 
arr2.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]

let arr3 = Object.assign([], arr1);
arr3.push(5);
console.log(arr1); // [1, 2, 3]
console.log(arr3); // [1, 2, 3, 5]

// Comparison Operators
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(null > 0);           // false
console.log(null == 0);          // false
console.log(null >= 0);          // true

// Logical Operators
console.log(0 && "hello");    // 0
console.log(1 && "hello");    // "hello"
console.log("" || "world");   // "world"
console.log(5 || "world");    // 5
console.log(!"hello");        // false
console.log(!0);              // true

// Ternary Operator
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);  // "Adult"

let score = 75;
let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : "F";
console.log(grade);  // "C"

// Bitwise Operators
console.log(5 & 1);  // 1
console.log(5 | 1);  // 5
console.log(5 ^ 1);  // 4
console.log(~5);     // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2

// Extra Explanatory Code
// Logical AND (&&) stops at the first falsy value
console.log(0 && "hello");    // 0
console.log(1 && "hello");    // "hello"

// Logical OR (||) stops at the first truthy value
console.log("" || "world");   // "world"
console.log(5 || "world");    // 5

// NOT (!) Operator negates the truthiness
console.log(!"hello");        // false
console.log(!0);              // true

// Nested Ternary Operator Example
let marks = 85;
let performance = (marks >= 90) ? "Excellent" : (marks >= 80) ? "Very Good" : (marks >= 70) ? "Good" : "Needs Improvement";
console.log(performance); // "Very Good"

// Bitwise Operator Explanation
console.log(5 & 1);  // 1 (Bitwise AND)
console.log(5 | 1);  // 5 (Bitwise OR)
console.log(5 ^ 1);  // 4 (Bitwise XOR)
console.log(~5);     // -6 (Bitwise NOT)
console.log(5 << 1); // 10 (Left shift)
console.log(5 >> 1); // 2 (Right shift)
