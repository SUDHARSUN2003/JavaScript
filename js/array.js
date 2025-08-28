//const myArray = [];
//myArray[0] = 111;

const myArray = ["sudharsun" , true , 2003];

console.log(myArray);

console.log(myArray.push("mkce"));   //add "mkce" at last and return length of the array

console.log(myArray.unshift("karur"));// add "karur" at begining and return length of the array

console.log(myArray.pop());  // pop remove and return last element

console.log(myArray.shift()); //// shift remove and return first element

//console.log(myArray.delete(2));

console.log(myArray);

console.log(myArray.reverse());

console.log(myArray.join()); // it makes the all array elements as string

console.log(myArray.includes(2003));

console.log(myArray.slice(2,3));

array = [1,2,3,4,5,6,7,8,9,10];

console.log(array);

console.log(array.splice(3,5));

console.log(array.slice(1,4));

//array concartinaton

const arr1 = [1,2,3];
const arr2 = [4,5,6];

console.log(arr1.concat(arr2));

console.log(...arr1,...arr2); //spread operator

//2D array

const arr3 = [arr1,arr2];

console.log(arr3[1][2]);








