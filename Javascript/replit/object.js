const toyotaCar =  {
    name: "Toyota",
    color: "Green",
    getCarName: function() {
        return this.name;
    },
    changeCarColor: function(newColor) {
        this.color = newColor;
    }
}
const BenzCar = {
    name: "Benz",
    color: "Blue",
    getCarName: function(){
        return this.name;
    },
    changeCarColor: function(newColor){
        this.color = newColor;
    }
}
console.log(toyotaCar)
function changeAnyCarColor(carObject, newCustomColor) {
    carObject.changeCarColor(newCustomColor);
}

console.log(changeAnyCarColor(BenzCar, "Pink"))

class Car {
    constructor(carName, carColor, CarModel, carType) {
        this.carName = carName;
        this.carColor = carColor;
        this.CarModel = CarModel;
        this.carType = this.carType;
    }
    getCarName() {
        return this.carName;
    }
    changeCarColor(newColor = this.carColor){
        this.carColor = newColor;
    }
    getAttributes() {
        return `${this.carName} ${this.carColor} ${this.CarModel} ${this.Model}`
    }
    changeCarType(newType) {
        this.carType = newType;
    }
}
function divideAdd(a, b) {
    let total = a + b;
    return total/2;
}
console.log(divideAdd(20, 18))

class Calculate {
    constructor(a, b){
        this.a = a
        this.b = b
    }
    add() {
        return this.a + this.b;
    }
    subract() {
        return this.b - this.a
    }
}
module.exports = {
    Car
}

module.exports = {
    Calculate
}