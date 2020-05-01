document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);

});

function createNewTask(event) {
  event.preventDefault();
  console.log('submitted');

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  // add input to HTML element
  newTask.innerText = newTaskDescription.value;


  //add li to DOM:
  //access where we want to add it
  const appendNewTask = document.getElementById("tasks")
  //add it
  appendNewTask.appendChild(newTask)
   //clear form
  event.target.reset();

};
