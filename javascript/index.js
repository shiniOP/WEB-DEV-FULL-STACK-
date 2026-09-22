// variable ko kaise banate h

let name = "John"; // string variable
let age = 30; // number variable
const pi = 3.14; // constant variable -> final cant change 

console.log(name,age,pi);

// Data types ->
// primitive data types -> string, number, boolean, null, undefined, symbol
// non primitive data types -> object, array, function -> typeof - object

let c = "how are you";
let d = "chad";
console.log(c, d);

// bigint
let num = 1234567890123456789012345678901234567890n; // BigInt
console.log(num);

// object gives keys and values
let person = {
    name: "John",
    age: 30
};
console.log(person); 

//functions -> in javascript functions can be stored in variables.
let greet = function(name) {
    return "Hello " + name;
};
console.log(greet("John"));

// primitive data types are immutable -> string, number, boolean, null, undefined, symbol - cant change the value of primitive data types.

// operators -> +, -, *, /, %, ++, --, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !, ?, :, =

let a = 10;
let b = 20;
let res = a + b;
console.log(res);

// assignment operators -> =, +=, -=, *=, /=, %=

let x = 10;
x += 5;
console.log(x);

//comparison operators -> ==, ===, !=, !==, >, <, >=, <=

let p = 10;
let q = "10";
console.log(p == q);

console.log(0/0);

// number -> string conversion
let num1 = 10;
let str1 = String(num1);
console.log(str1, typeof str1);

//string -> number conversion
let str2 = "20";
let num2 = Number(str2);
console.log(num2, typeof num2);

//boolean -> number conversion
let bool1 = true;
let num3 = Number(bool1);
console.log(num3, typeof num3);

// for loop
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let j = 0;
while(j < 5) {
    console.log(j);
    j++;
}

// do while loop
let k = 0;
do {
    console.log(k);
    k++;
} while(k < 5);

// if else
let age1 = 18;
if(age1 >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
// if & else can only handle one condition, else if is used for multiple conditions

// logical operators -> &&, ||, ! 
// && -> and, || -> or, ! -> not
// &&: if first value is false then it will return the first value itself, if first condition is true then it will return second value.
// ||: if first value is true then it will return the first value itself, if first condition is false then it will return second value.
// !=: it will return the opposite value of the boolean value.

// math object -> Math.PI, Math.round(), Math.ceil(), Math.floor(), Math.random(), Math.max(), Math.min()
console.log(Math.PI);
console.log(Math.round(4.7));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.random());
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

//string 
const day = 19;
const str3 = `Hello ${day} 
World`; // ` is used for multi line string
console.log(str3.length);
console.log(str3.toUpperCase());

// slice() -> it will return a part of the string
const str4 = "Hello World";
console.log(str4.slice(0, 5));
console.log(str4.slice(-5, -1));

// string replace() -> it will replace the first occurrence of the string
const str5 = "Hello World";
console.log(str5.replace("World", "JavaScript"));
console.log(str5.replaceAll("l", "L"));

//trim() -> it will remove the white spaces from the start and end of the string
const str6 = "   Hello World   ";
console.log(str6.trim());

//split() -> it will split the string into an array
const str7 = "Hello,World";
console.log(str7.split(","));

// array -> it is a collection of data
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length - 1]);

//heterogeneous array -> it can contain different data types
const arr1 = [1, "Hello", true, null, undefined, {name: "John"}, [1, 2, 3]];
console.log(arr1);

// array methods -> push(), pop(), shift(), unshift(), indexOf(), includes(), join(), reverse(), sort()
const arr2 = [1, 2, 3, 4, 5];
arr2.push(6);
console.log(arr2);
arr2.unshift(0); // unshift add at the first index
console.log(arr2);
arr2.shift(); // shift remove the first index
console.log(arr2);

arr2.slice(1, 4); // slice return a new array from the original array
console.log(arr2.slice(1, 4));

//concat() -> it will merge two or more arrays
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = arr3.concat(arr4);
console.log(arr5);

//spread operator -> it will spread the elements of an array into another array
const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6];
const arr8 = [...arr6, ...arr7];
console.log(arr8);

//arr sort array in ascending order : agr -ve then pehle a ayega fr b ayega else vise varsa
const arr9 = [3, 1, 4, 2, 5];
arr9.sort((a, b) => a - b);
console.log(arr9);

//decsending order
const arr10 = [3, 1, 4, 2, 5];
arr10.sort((a, b) => b - a);
console.log(arr10);

//flatten() -> it will flatten the array
const arr11 = [1, [2, 3], [4, [5, 6]]];
console.log(arr11.flat(2)); // 2 is the depth of the array

//object -> it is a collection of key-value pairs
const obj = {
    name: "John",
    age: 30,
    email: "john@example.com",
    amount: 1000
}
console.log(obj);
console.log(obj.name);

//store new key value pair in object
obj.gender = "male";
console.log(obj);

//update the value of a key in object
obj.amount = 2000;
console.log(obj);

//delete a key value pair from object
delete obj.email;
console.log(obj);

//show all keys of an object
console.log(Object.keys(obj));
//show all values of an object
console.log(Object.values(obj));
//show all key value pairs of an object
console.log(Object.entries(obj));

// object destructuring -> it is a way to extract values from an object and assign them to variables
const {email,amount} = obj;
console.log(email,amount);

//functions -> it is a block of code that can be reused
//types to create functions 
//1.
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

//number of arguments passed to a function can be less than or more than the number of parameters defined in the function. In such cases, the missing parameters will be undefined and the extra parameters will be ignored.
function addS(p, k,l=0,j=0){
    const sum = p + k + l + j;
    console.log(sum);
} 
addS(5, 3); // 8
addS(5, 3, 2);

//solution -> rest operator -> it will store the extra parameters in an array
//2.
function addR(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(addR(5, 3)); // 8
console.log(addR(5, 3, 2)); // 10

//function expression -> it is a function that is stored in a variable
const multiply = function(a, b) {
    return a * b;
}
console.log(multiply(5, 3)); // 15

//arrow function -> it is a shorter way to write a function
//3.
const divide = (a, b) => {
    return a / b;
}
console.log(divide(5, 3)); // 1.6666666666666667

// return keyword,{ } not used for single line function
const divide1 = (a, b) => a / b;
console.log(divide1(5, 3));

//4.IIFE -> Immediately Invoked Function Expression -> it is a function that is executed immediately after it is defined
(function() {
    console.log("IIFE");
})();

//callback function -> it is a function that is passed as an argument to another function
function greet1(name, callback) {
    console.log("Hello " + name);
    callback();
}

// CODE RUN -> EXECUTION CONTEXT:
//1.MEMORY ALLOCATION PHASE -> memory is allocated for variables and functions
//2.CODE EXECUTION PHASE -> code is executed line by line
// HOISTING -> it is a mechanism where variables and functions are moved to the top of their scope before code execution

//scope -> it is the area where a variable is defined and can be accessed
//global scope -> it is the area where a variable is defined outside of any function or block and accessible from anywhere in the code
//local scope -> it is the area where a variable is defined inside a function or block of code and accessible only within that function or block

//closure -> it is a function that has access to the variables in its outer scope even after the outer function has returned

//higher order function -> it is a function that takes another function as an argument or returns a function as a result



//foreach() -> it is a method that is used to iterate over an array and execute a function for each element in the array
const arr12 = [1, 2, 3, 4, 5];
let sum = 0;    
arr12.forEach((element) => {
    sum += element;
})
console.log(sum);

//filter() -> it is a method that is used to create a new array with all the elements that pass the test implemented by the provided function
const arr13 = [1, 2, 3, 4, 5];
const filteredArr = arr13.filter((element) => {
    return element > 3;
});
console.log(filteredArr);

//map() -> it is a method that is used to create a new array with the results of calling a provided function on every element in the calling array
const arr14 = [1, 2, 3, 4, 5];
const mappedArr = arr14.map((element) => {
    return element * 2;
});
console.log(mappedArr);

//set -> it is a collection of unique values
const set = new Set(arr);
console.log(set);

//map -> it is a collection of key-value pairs
const map = new Map();
map.set("name", "John");
console.log(map);
