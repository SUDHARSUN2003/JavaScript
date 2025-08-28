
const vehicel = { wheel : 2,
                  colour : "black"
                };
console.log(vehicel.wheel);

//////////////

const car = Object.create(vehicel);

console.log(car.wheel);  //calling wheel from vehicel

car.wheel = 4;  //reassigning
console.log(car.wheel); //wheel value changed from 2 to 4 after reassigning

///////////////////

const tesla = Object.create(car);  //tesla inherite from car
console.log(tesla.colour);    //inherite colour from vehicel