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

// Control Flow - If-Else Statements
let a = 20;
if (a < 0){
    console.log("a is Negative");
}else if(a > 0){
    console.log("a is Positive");
}else{
    console.log("a is 0");
}

let score2 = 100;
if (score2 == 100){
    console.log("Perfect Score !");
}else if(score2 >= 90){
    console.log("A");
}else if(score2 >= 80 && score2 <= 89){
    console.log("B");
}else if(score2 >= 70 && score2 <= 79){
    console.log("C");
}else{
    console.log("Fail");
}

// Switch Case Example
let month = 1;
switch (month) {
    case 1:
    case 2:
    case 12:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}

// Loops
for(let i = 10; i > 0; i--){
    console.log(i);
}

let i = 10;
while(i > 0){
    console.log(i);
    i--;
}

i = 5;
do{
    console.log("JavaScript");
    i--;
}while(i > 0);

// Fibonacci Series
let f = 0;
let s = 1;
console.log(f);
console.log(s);
for(let i = 0; i < 8; i++){
    let n = f + s;
    console.log(n);
    f = s;
    s = n;
}

// Factorial Calculation
let fact = 1;
let num = prompt("Enter the number : ");
for(let i = 1; i <= num; i++){
    fact = fact * i;
}
console.log(fact);

// Prime Numbers from 1 to 50
function isprime(n){
    if(n <= 1){
        return false;
    }
    if(n == 2){
        return true;
    }
    for(let i = 2; i < Number(n**0.5) +1 ; i++){
        if (n % i == 0){
            return false;
        }
    }
    return true;
}
for(let j = 1; j <=50; j++){
    if(isprime(j)){
        console.log(j);
    }
}

// Prompt until multiple of 5 is entered
let text = 1;
do{
    text = prompt("Enter a multiple of 5 to exit : ");
}while(text % 5 != 0);
