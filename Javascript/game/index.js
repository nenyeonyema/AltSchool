// const value = document.getElementById("number")
// console.log(value)
// DOM: Document Object Model: These re these elements in form of model in whcih you have in your code
//  You can update/change our elements on js and even style our element

//  Note we can access of html elements using id's and class's and tag/element names using the  query.Selector method, but if we want to access an element using just id's and class names we use their individual methods like getElementById and getElementByClassName respectively.

// but with query selector we use the name of the element/id/class like we use them in css, eg document.querySelector('input' or #idname or .classname)


// const inputVal = document.querySelector('input').value
// console.log('The first query element is:', inputVal)
// function Add(a, b){
//     return a + b
//  }
//  console.log(Add(4, 7))

const inputVal = document.querySelector('input')
// console.log('The first query element is:', inputVal)

const inputButton = document.getElementById('check')
// console.log(inputButton)

// const line = document.getElementsByClassName('thegame')[1]
// console.log(line)
const userGuess = document.getElementById('number')
const actualVal = 46

function displayVal(userGuess, actualVal) {
    // alert(inputVal.value)
    if (userGuess.value === "") {
        alert("Input is empty")
    }
    else if (parseInt(userGuess.value) === actualVal) {
        alert("Congrats, You Guess Right!")
    }
    else if (parseInt(userGuess.value) <= 45){
            alert("Try Again, Value is smaller than the guess")
    }
    else if (parseInt(userGuess.value) >= 46){
        alert("Try Again, Value is bigger than the guess")
    }
}

inputButton.addEventListener('click', function(e) {
    e.preventDefault();
    displayVal(userGuess, actualVal);
});
// You addEventListener takes the type of event you want it to do and the function you want it to run.
//  inputButton.addEventListener('click', function(e) {
//     e.preventDefault()
//     alert(inputVal.value)
//  })


 // Get your guess number from the input value
 // Get your button element
 // generate a guess
 // check if guess is the same with user guess
 // if guess is the same with the user wins
 // else if guess is not the same with user, loses.

//  Assignment: Keep a track of the number of users guess until reaches 5, alert it to say you cannot guess again once  you disable  //the guess button until the user refreshes the pages.s
// 
