class Student {
    constructor(nameP, ageP, hasPaidP) {
        this.name = nameP;
        this.age = ageP;
        this.hasPaidP = hasPaidP;
    }
    printName() {
        return `The name of the student is ${this.name};`
    }
    student_details() {
        return `My name is ${this.name} from the department of ${this.department} and age ${ths.age}`;
    }
    printAge() {
        return `The age of this student is ${this.age}`
    }
    printEDonPay(day) {
        if (this.hasPaidP) {
            return `${this.name} has paid, on ${day}`;
        }
        else {
            return `${this.name} has not paid`;
        }
    }

}
const nenye = new Student("Chinenye", 10, true);
const genny = new Student("Genevieve", 15, false);
console.log(nenye.printEDonPay("tuesday"));
console.log(genny.printEDonPay("Wednesday"))

// Double equality == checks for just value equality i.e "2" == 2
// while triple equality checks for both values and data types i.e "2" === 2

// Cloning or copying an object using the Object.assign method
const amara = Object.assign({}, nenye);
const iyke = { ...genny};
console.log(amara);
console.log(iyke);



// console.log(nenye.department);
// console.log(fullname());
// console.log(student_details())
// document.getElementById("heading").innerHTML = nenye.name;