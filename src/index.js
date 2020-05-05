document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');

  taskForm.addEventListener("submit", function(event) {
    let taskDesc = document.getElementById("new-task-description").value;
    document.getElementById("tasks").innerHTML += `<li> ${taskDesc}</li>` ;
    event.preventDefault()

  });
});
