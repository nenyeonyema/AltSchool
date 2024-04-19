// to import the car class in the object.js file.
// we use the require with the filename without the js extension
// const {Car} = require("./object")
// const {Calculate} = require("./object")

// const benzcar = new Car("Benz", "Black", "2024", "Sedan")
// const fordCar = new Car("Ford", "white", "2027", "SUV")

// console.log(benzcar.getCarName())
// console.log(benz.changeCarColor())
// console.log(benzcar.getAttributes())

// function divideAdd(a, b) {
//     let total = a + b;
//     return total/2;
// }
// const calc = new Calculate(14, 17)

// F = (C * 9/5) + 32
// To convert 11 degree celcius to fahrenheit 
let c = 11
// therefore F = (11 * 9/5) + 32

function  celciusToFahrenheit(param) {
    // let formular = (param * 9/5) + 32;
    return (param * 9/5) + 32;
}
console.log(celciusToFahrenheit(c))

let f = 20
 const fahrenheitToCelcius = (param) => {
    let formula = (param - 32) * 5/9; 
    return formula;
 }
 console.log(fahrenheitToCelcius(f))
 // NOTE: Map and Filter are methods for an array and
 // it takes in a function that will perform on each member of the array
 // The filter method in arrary, filters out values based on some conditions
 // the filter method return a new array that met the filter condition


 // The map method also loops through the values of an arrary, 
 // performs action and returns an arrary of the newly operated values.
 let number = [2, 3, 5, 6, 7]
 const  highNumber = number
    .filter((value) => value > 2)
    .map((value) => value * 2);

console.log(highNumber);

// The square function takes two parameters, a function and an integer
// A call back function takes a function
function square(fn, number) {
    return fn(number);
}
function sqFn(number) {
    return number ** 2
}

// perimeter of a rectangle 2(length + breath)
// Area of rectangle = length * breath
let length = 12;
let breath = 15;
function perimeterRectangle(length, breath) {
    return 2 * (length + breath);
}
const areaRectangle = (length, breath) => {
    return length * breath;
}
console.log(perimeterRectangle(length, breath));
console.log(areaRectangle(length, breath))

console.log(perimeterRectangle(6, 9));
console.log(areaRectangle(9, 15))

const positiveNum = [1, 3, 5, 7, 9, 11];
const nums = [2, 4, 6];

function divideArrary (nums){
    return nums.map((value) => value / 2)
}
console.log(divideArrary(nums))

const arraryNum = nums.map((value) => value / 2);
console.log(arraryNum)

let fil = [2, 4, 6]
const filterNum = fil.filter((value) => value > 2)
console.log(filterNum);

function filNum(fil) {
    let pNum = fil.filter((value) => value > 2);
    return pNum;
}
console.log(filNum);
