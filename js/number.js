const num = 10;
const no = 10.02;
const number = "20";
const stringNum = "25.663aaa";

console.log(num === no); // int and float are here equal

console.log(num + number); // concat int and string

console.log(Number(number)); // convert string to int

console.log(Number.isInteger(num)); 

console.log(Number.parseFloat(stringNum)); // it return only float value from any type of value
console.log(Number.parseInt(stringNum));

console.log(Number.parseFloat(stringNum).toFixed(2).toString()); // chaining  

//Not a Number [NaN]
console.log(isNaN("sun")); //sun not a number so return true
//[Number Nan]
console.log(Number.isNaN("sun")); //Number method consist only number so it always retrun false
