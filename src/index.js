document.addEventListener("DOMContentLoaded", () => {
  const subBtn = document.querySelector("input[type = 'submit']");
  const taskList = document.getElementById('tasks');
  const inputField = document.getElementById("new-task-description");
  const deleteBtns = [];
  subBtn.addEventListener("click", (event) =>{
    let taskInput = inputField.value;
    let taskItem = document.createElement("li");
    taskItem.innerText = taskInput;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.setAttribute('id', taskInput);
    deleteBtns.push(deleteBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
    inputField.value = "";
    event.preventDefault();
    debugger
  }); 

  deleteBtns.forEach(button => button.addEventListener("click", () =>{
    console.log(button.id);
  }));
});
