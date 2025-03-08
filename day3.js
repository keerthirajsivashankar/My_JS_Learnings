// 1. Function to subtract two numbers (Regular function)
function subtract(a, b) {
    if (a >= b) {
        return a - b;
    } else {
        return b - a;
    }
}
a = prompt("Enter the value of 'A' : ");
b = prompt("Enter the value of 'B' : ");
console.log(subtract(a, b));

// 2. Function to subtract two numbers (Arrow function)
const subtractArrow = (a, b) => {
    return a >= b ? a - b : b - a;
};
console.log(subtractArrow(a, b));

// 3. Multiplication Function with Default Parameter (Arrow function)
const multiply = (a, b = 2) => {
    return a * b;
};
a = Number(prompt("Enter the value of 'A' : "));
console.log(multiply(a));

// 4. Multiplication Function with Default Parameter (Regular function)
function multiplyFunc(a, b = 2) {
    return a * b;
}
console.log(multiplyFunc(a));

// 5. Rest Parameters in Function
function concatenate(f, ...strs) {
    let final_str = "";
    for (let str of strs) {
        final_str += str;
        final_str += f;
    }
    return final_str;
}
console.log(concatenate("-", "Hello", "World", "JS"));

// 6. Object Methods: Keys, Values & Percentage Calculation
const percentage = (a, b, c) => {
    return ((a + b + c) / 300) * 100;
};

let student = {
    name: "Keerthi Raj",
    rollno: "128",
    html: 99,
    css: 90,
    js: 90
};

console.log(percentage(student.html, student.css, student.js));
console.log(Object.keys(student));  // Output: ['name', 'rollno', 'html', 'css', 'js']
console.log(Object.values(student)); // Output: ['Keerthi Raj', '128', 99, 90, 90]

// 7. Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Printing prime numbers from 1 to 50
for (let j = 1; j <= 50; j++) {
    if (isPrime(j)) {
        console.log(j);
    }
}

// 8. Factorial Calculation
let fact = 1;
let num = prompt("Enter the number for factorial: ");
for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log("Factorial:", fact);

// 9. Looping with do-while (Exit when user enters a multiple of 5)
let text = 1;
do {
    text = prompt("Enter a multiple of 5 number to exit: ");
} while (text % 5 !== 0);

// 10. Fibonacci Sequence
let f = 0;
let s = 1;
console.log(f);
console.log(s);
for (let i = 0; i < 8; i++) {
    let n = f + s;
    console.log(n);
    f = s;
    s = n;
}

// 11. Countdown using while loop
let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
