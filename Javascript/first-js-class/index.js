// // We have inline, internal and external js
// alert('Welcome From')

// const firstName = "Chinenye"
// var middleName = "Genevieve"
// let lastName = "Onyema"

// alert(firstName + " "+ middleName + " " + lastName)

// // Different ways to declare and initialize a variable
// // With "var" keyword declaration you can use when you know you will
// // reinitialize it but with const can't reinitialize a its variable.

// middleName = 'Genny'

// // "let" is block scope while "var" is global scope
// // You can reinitialize a variable declared with "let" keyword, and re initialize it with the "let" keyword.

// // let lastName = "Onys"

// alert(firstName + " "+ middleName + " " + lastName)



// let a = 10;
// let b = 20;
// c = a + b;
// console.log(c)

// let x = 15
// let y = 20
// z = y - x
// console.log(z)

// let d = 10.4
// let e = 2.5
// f = d * e
// console.log(typeof f)

// let myString = "Hello World";
// console.log(myString)
// console.log(typeof myString)
// console.log(myString + d)
// console.log(a > b)


// choiceOfDrink = "Coke"

// if (choiceOfDrink === "coke") {
//     console.log("Buy Okpa")
// }
// else if (choiceOfDrink === "Fanta") {
//     console.log("Buy bread and groundnut")
// }
// else {
//     console.log("Nigeria don hard pass anything")
// }

// DOM manipulations
// const value = document.getElementById('demo').innerHTML="Hello World!";
// console.log(value);

// const tags = document.getElementsByTagName('h1').innerHTML="Hello Nigeria!";
// console.log(tags);

// Events are methods listening on a tag or elements which get triggered when clicked
//  The method "addEventListener" listens to an event on a tag/element(object) "DocumentLoaded"
// Eg window.addEventListener

window.addEventListener('DOMContentLoaded', (event) => {
    
    // Different ways to define and access an object property and their methods
    const object = {}
    object.fname = "Nenye",
    object.lname = "Onyema",
    object.age = 18,
    object.fullName = function() {
        return this.fname + " " + this.lname;
    }
    object.fullNameCap = function() {
        return (this.fname + " " + this.lname).toUpperCase()
    }
    let txt = ""
    for (let x in object) {
        txt += object[x] + " ";
    };
    document.getElementsByClassName("newdemo")[0].innerHTML = txt; // By class needs indexing as returns a collection of those elements.
    document.getElementsByClassName("newdemo")[0].innerHTML = Object.values(object);

    console.log(txt)
    console.log(object.fname)
    console.log(object.lname)
    console.log(object.age)
    console.log(object.fullName())
    console.log(object.fullNameCap)

    const dog = {
        name: "German Shepherd",
        age: 5,
        owner: "Nenye",
        myFunction: function () {
            return `${this.owner} is the owner of the dog by name ${this.name}, and it's ${this.age} years old.`
        },
        myDogCan: function () {
            return "This Dog can detect and sniff hazardous substances from a mile."
        }
    }
    console.log(dog.name)
    console.log(dog.age)
    console.log(dog.owner)
    console.log(dog.myFunction())
    console.log(dog.myDogCan())

    document.getElementById('demo').innerHTML = dog.name + " " + dog.age;

    // Template literals of string accepts all symbol imbedded can take on multiple lines and white spaces
    let text =
    `Hello, ${object.fname}
    You are now ${object.age} years old
    congrats! ${object.fullName()}, you are now an adult!`;

    console.log(text);

    // Strings properties and methods

    let myName = "Chinenye Genevieve Onyema"
    console.log(myName.length)
    console.log(myName.charAt(9))
    console.log(myName.at(10))
    console.log(myName.charCodeAt(9)) // This returns the unicode number for the character at that index
    let char = myName[0]
    console.log(char)

    // Slicing 
    console.log(myName.slice(9, 19)) // Slicing starts from the starting index and end at the end index -1
    console.log(myName.substring(9, 19))
    console.log(myName.slice(9))
    console.log(myName.substr(9, 7)) // the second parameter is the length to be cut starting from the index of the first parameter
    console.log()

    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);

    // Numbers and Array properties and methods

    // DOM Manipulations
    // Fruits
     const fruits = document.querySelector("#fruits");
     const listItem1 = document.createElement("li");
     const listItem2 = document.createElement("li");
     const listItem3 = document.createElement("li");
     listItem1.textContent = "Mango";
     listItem2.textContent = "Pineapple";
     listItem3.textContent = "Orange";
     fruits.append(listItem1); // appends to the end of the list
     fruits.prepend(listItem2); // prepend appends item to the beginning of a list
    fruits.insertBefore(listItem3, fruits.getElementsByTagName("li")[2]); // insert before method inserts an orange just the list item of index 2

    //Styling with  CSS
    const heading = document.getElementById("my-title");
    heading.textContent = "My Title style from Javascript";
    heading.style.backgroundColor = "rgb(0, 200, 100)"; // green
    heading.style.color = "rgb(0, 0, 0)" //black color
    heading.style.fontFamily = "consolas";
    heading.style.textAlign = "center";
    heading.style.border = "2px solid green";
    heading.style.display = "block";
    

    // Loops
    let symbols = window.prompt("Enter a symbol");
    let rows = window.prompt("Enter the number of rows");
    let columns = window.prompt("Enter the number of columns");

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            document.getElementById("para").innerHTML += symbols;
        }
        document.getElementById("para").innerHTML += "<br>";
    }
    document.getElementById("para").innerHTML += "<br>";
   
    // Functions
    callMe();
    function callMe() {
        let myName = "Chinenye";
        console.log("My name is ", myName);
        console.log(welcomeHome(myName));
    }
    function welcomeHome(userName) {
        return "Hi", userName, "Welcome to my Home page";
    }
    
    // If else if and else statements
    let adult = checkAge(12); // calls the checkAge function to call the age
    console.log(adult); // prints the adult age

    function checkAge(age) {
        if (age >= 18) {
            return true;
        }
        else {
            return false;
        }
    }

    // itenary operator using question mark ? work on conditions which takes 3 operands
    // condition? exprIfTrue : exprIfFalse
    // Using itenary operator is a shortcut for if statements above
    let newAge = 21;
    console.log(newAge >= 18? true : false);

    checkWinner(true);
    function checkWinner(win) {
        win? console.log("YOU WIN!") : console.log("YOU LOSE!");
    }


    // DOM manipulation
    const dessert = document.getElementsByTagName('ul')[1];
    const listItem4 = document.createElement("li");
    listItem4.setAttribute("id", "ice");
    listItem4.textContent = "Ice cream";
    listItem4.checked = "checked";

    const listItem5 = document.createElement("li");
    listItem5.className = "pie";
    listItem5.textContent = "Pizza";
    

    dessert.appendChild(listItem4);
    dessert.appendChild(listItem5);

    listItem4.style.backgroundColor = "black";
    listItem4.style.color = "white";

    // dessert.forEach((value) => {
    //     console.log(value);
    // });?

    // Loop using forEach()
    const nums = [45,4,9,16, 25];
    let txts = "";
    nums.forEach((value) => {
        txts += `${value} <br>`;
    });

    document.getElementById('a-demo1').innerHTML = txts;
    
    // short hands function using maps
    let newtxt = "";
    nums.map((value, index) => {
        newtxt += `${index}: ${value} <br>`;
    });

    document.getElementById('a-demo2').innerHTML = newtxt;

    // for (let i = 0; i < dessert.length; i++) {
    //     console.log(dessert[i]);
    // }

    // Accessing the DOM through parenting, child and siblings
    // .firstElementchild
    let elementOne = document.body;
    let child1 = elementOne.firstElementChild;
    child1.style.backgroundColor = "lightblue";    

    // Checks for the parent of the element
    // .parentElement
    let element4 = document.querySelector("#a-demo1");
    let parent = element4.parentElement;
    parent.style.background = "lightgrey";

    // .nextElementSibling  // .previousElement
    let element5 = document.querySelector("#a-demo2");
    let sibling = element5.nextElementSibling;
    sibling.innerHTML = "I am the next sibling of demo2";

    // .lastElementChild
    let lastElement = document.querySelector("#fruits");
    let child2 = lastElement.lastElementChild;
    child2.style.backgroundColor = "red";

    // element children and using forEach to loop through it
    // let element6 = document.querySelector("ul")[1];
    // let child3 = Array.from(element6.children)
    // child3.forEach(child => child3.style.backgroundColor = "red");

    //  Creating elements and appending them to the tags
    let h1Tag = document.createElement("h1");
    h1Tag.innerHTML = " Welcome to my JS scripting"
    h1Tag = document.body.append(h1Tag);

    let myList = document.querySelector("#veggies");
    const newLi = document.createElement("li");
    newLi.textContent = "Lettuces";
    myList.append(newLi);
  
    // Event Listeners
    // This gets the element by its ID and onclick is assigned a function to perform.
    const element = document.getElementById("myBtn2");
    element.onclick = doSomething;

    function doSomething(){
        alert("You did something");
    }

    // The onload method listen for events on window when loaded
    const element2 = document.body;
    element.onload = welcome;

    function welcome() {
        alert("Welcome to my web page")
    }

    // Class / Object
    class Students {
        constructor(name, year, department) {
            this.name = name;
            this.year = year;
            this.department = department;
        }
        showName() {
            return this.name
        }
        age() {
            let dates = new Date();
            return dates.getFullYear() - this.year;
        }
    }
    let std1 = new Students("Nenye", 2015, "BioChemistry");
    let std2 = new Students("Genny", 2016, "Statistics");
    document.getElementById("demo3").innerHTML = `My name is ${std1.name} from the department of ${std1.department} ${std1.year} set `

    class ArtStudents extends Students {
        constructor(name, year, department, courses, score) {
            super(name, year, department);
            this.course = courses;
            this.score = score;
        }
    }
    class ScienceStudents extends Students {
        constructor(name, year, department, courses, score) {
            super(name, year, department)
            this.course = courses;
            this.score = score;
        }
    }
    let std4 = new ArtStudents("Amara", 2020, "Banking & Finance", "BF301", 90);
let std5 = new ScienceStudents("Iyke", 2021, "Architecture", "ACH400", 85);
console.log(std4.name);
console.log(std5.showName());
console.log(`My name is ${std4.name} from the department of ${std4.department} ${std4.year} set `)
});
