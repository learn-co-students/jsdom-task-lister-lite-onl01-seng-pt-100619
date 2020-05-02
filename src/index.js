
document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", createNewTask);
  const taskItemDelete = document.getElementById('tasks')
});

  const createNewTask = event => {
    event.preventDefault();
    //stop form from trying to submit
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    const removeButton = document.createElement("button")
    removeButton.innerText = "X"
    removeButton.addEventListener('click', function(){
      newTask.remove();
    }
    )

    // removeButton.innerText = newTaskDescription.value;
    newTask.innerText = newTaskDescription.value;
    newTask.appendChild(removeButton)

    appendNewTask(newTask);
    event.target.reset();
    // appendNewTask(newTask);
    // event.target.reset();
  };

  let appendNewTask = function(task){
    document.getElementById('tasks').appendChild(task);
    event.target.reset();
  }


