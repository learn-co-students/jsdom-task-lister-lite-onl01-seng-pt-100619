document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // create a function for the eventListener, where the new li element is created for the tasks
  // assign input to variable finding the input tag and accesing the text through  innerText, and set this text to the new li element for the list
  // add an event listener to the form element directly, and use event instance to preventDefeult action and then add logic

  const form = document.getElementById('create-task-form');

  form.addEventListener("submit", function(event) {
    
    let text = document.getElementById("new-task-description").value; // get text from form
    // let list = document.createElement("li")
    // list.innerHTML = text
    
    document.getElementById("tasks").innerHTML += `<li> ${text}</li>` ;
    event.preventDefault()

     // add list to tasks
    // tasks.innerText = list
  });

});

// function displayMessage(string){
//   document.getElementById("greeting").innerText = string
//  let greeting = document.getElementById("greeting")
//  greeting.innerHTML = string
//  let text = document.createTextNode(string)
//  greeting.appendChild(text) // add createTextNode to make a text that can be added to our element and appendChild this text to our element


// let newHeader = document.createElement("h1");

// newHeader.setAttribute("id", "victory");

// document.body.appendChild(newHeader);

// // let newHeader = document.querySelector("h1#victory");

// let text = document.createTextNode("YOUR-NAME is the champion");

// newHeader.appendChild(text);

// function addingEventListener() {
//   const input = document.getElementById('input');
// input.addEventListener('click', function(event) {
// alert('I was clicked!');
// });
// }

// function moveDodgerRight() {
//   let leftNumbers = dodger.style.left.replace("px", "");
//   let left = parseInt(leftNumbers, 10);
 
//   if (left < 400) {
//     dodger.style.left = `${left + 1}px`;
//   }
// }
// // use style left parameter to move element, convert values to int and back to string, use event listener, and set the move right or move left as callback
// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
//   } else if (e.key === "ArrowRight"){
//       moveDodgerRight();
//   }
// });

// function unleashDog(dogName, dogBreed) {
//   return `Unleash ${dogName} the ${dogBreed}`;
// }

// let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog ]
// let array = []
// function exerciseDog(dogName, dogBreed){
// for (let i = 0; i < routine.length; i++) {
//  array.push(routine[i](dogName,dogBreed))
// } 
// return array;
// }
// use for loop on routine to access each function and pass the attributes, push all the return strings into new array

// function writeCards( names , event) {
//   let array = [];

//   for (let i = 0; i < names.length; i++) {

//   array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
// }
// return array;
// }

// writeCards(names, event);

// function countDown(number){
// for (let countDown = number; countDown >= 0; countDown--) {
//   console.log(countDown);
// }

// }
