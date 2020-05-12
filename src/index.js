document.addEventListener("DOMContentLoaded", () => {
  
});

const form = document.querySelector("#create-task-form")
const list = document.querySelector("#tasks")

form.addEventListener("submit", function(event) {
  event.preventDefault()

const description = document.querySelector("#new-task-description").value

list.innerHTML += ` <li> ${description} <button onclick="Delete(this)">Delete</button> </li> `


})


function Delete(currentEl){
currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
}










