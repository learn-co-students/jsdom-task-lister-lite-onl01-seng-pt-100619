// document.addEventListener("DOMContentLoaded", () => {
//   const taskForm = document.getElementById('create-task-form');
//   const taskDescription = document.getElementById('new-task-description');
//   const taskList = document.getElementById('tasks')

//   taskForm.addEventListener("submit", taskCreation(event));
  

//   function taskCreation(event){
//     event.preventDefault();
//     let newTask = document.createElement("li");
//     newTask.innerText = taskDescription.value; 
    
    

//     const appendNewTask = event => {
//       document.getElementById("tasks").appendChild(event);
//     }
    
//     appendNewTask(newTask)

    
//   }
  
// });


document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  // const newTaskDescription = document.getElementById("new-task-description");
  // const newTaskPriority = document.getElementById("new-task-priority");
  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
debugger