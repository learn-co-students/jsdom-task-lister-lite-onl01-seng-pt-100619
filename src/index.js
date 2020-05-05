

document.addEventListener("DOMContentLoaded", function(){
  document.addEventListener("submit", createNewTask);



  function createNewTask(){
    // creating task:
    console.log("task creation clicked")
    // reset values inside the textbox
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
    const taskList = document.getElementById('tasks')
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    taskList.appendChild(newTask);
    
    // setting priority for each task:
    const addPriority = document.createElement('select');
    addPriority.setAttribute('class','priorities');
    const option1 = document.createElement('option');
    option1.setAttribute('value','low');
    option1.setAttribute('id','low_Priority');
    option1.innerText = "low";
    const option2 = document.createElement('option');
    option2.setAttribute('value','medium');
    option2.setAttribute('id','medium_priority');
    option2.innerText = "medium";
    const option3 = document.createElement('option');
    option3.setAttribute('value','High');
    option3.setAttribute('id','high_priority');
    option3.innerText = 'High';

    addPriority.appendChild(option1);
    addPriority.appendChild(option2);
    addPriority.appendChild(option3);
    newTask.appendChild(addPriority);
    
    debugger

    

    // deleteing each task
    const removeButton = document.createElement("button")
    removeButton.innerText = "X"
    newTask.appendChild(removeButton);
    removeButton.addEventListener('click', function(){
      newTask.remove();
    });

  
  }


});

  

