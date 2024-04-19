// window.addEventListener("DOMContentLoaded", (event) => {
//     const student = {};
//     // const studentname = new Object()

//     student['name'] = "Chinenye";
//     student.age = 12;
//     student.department = 'Computer Science';
//     console.log(student); // Accesses the whole object
//     console.log("The name of the student is" + " " + student.name); // To Access an attribute
//      Note: Using backticks(`) is the best practice for quoting string literals such that you won't need to use the plus+  sign to concat as it gives "space" where necessary, also u can use different symbols and characters without getting an error.
//     console.log(`The age of the student is ${student.age} \nthe department ${student.department}`);
//      console.log(student);
// });

// ToDo list
// First we list to an event of the entire document when clicked on the browser
window.addEventListener("DOMContentLoaded", (event) => {
    // store the values into a variable
    const taskName = document.getElementById("task-name");
    const taskDescript = document.getElementById("description");
    const button = document.getElementById("btn");
    const taskList = document.getElementById("lists");
    const taskArray = [];

    //  A function that displays what the button will do. Seperation of concern

    const addToDo = () => {

    }

    // Listen to the event of clicking the button
    button.addEventListener("click", () => {
        // Check for the both inputs from the user
        if (taskName.value === "" || taskDescript.value === "") {
            alert("Please fill the form")
            return;
        }; 
        // To build the input of the user into an object per user
        const task = {};
        task['nameOfTask'] = taskName.value;
        task['valueOfTask'] = taskDescript.value;
        console.log(task, "task");

        // As array contains different data types, store/push each user(object) into an array
        taskArray.push(task);
        // To make the input accept new user inputs, we make it empty
        taskName.value = '';
        taskDescript.value = '';

        console.log(taskArray);

        for (let i = 0; i < taskArray.length; i++) {
             // To add the items in the array as list items in html <li> tag
            const li = document.createElement('li');
            li.innerHTML = `${taskArray[i].nameOfTask} <br /> ${taskArray[i].valueOfTask}`;

            console.log(taskArray[i]);
            taskList.appendChild(li)
        }
    });
});