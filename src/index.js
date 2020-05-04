

document.addEventListener("DOMContentLoaded", function(){
  document.addEventListener("submit", createNewTask);



  function createNewTask(){
    console.log("task creation clicked")
    event.preventDefault();
    //stop form from trying to submit
    const newTaskDescription = document.getElementById("new-task-description");
    const taskList = document.getElementById('tasks')
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    taskList.appendChild(newTask);

    // rmove button: used to append on each new task created and has a listener that use remove mehtod to delete that task.
    const removeButton = document.createElement("button")
    removeButton.innerText = "X"
    newTask.appendChild(removeButton);
    removeButton.addEventListener('click', function(){
      newTask.remove();
    });

    // const addPriority = document.createElement("select");
    // addPriority.setAttribute("class","priority");
    // addPriority.setAttribute("id","priority");

    // const newOption = document.createElement('option')
    // const lowPriority = document.createTextNode('low');
    // const mediumPriority = document.createTextNode('medium');
    // const highPriority = document.createTextNode('high');
    

  
    
    // addPriority.appendChild(newOption);
    
    
    
  

    // removeButton.innerText = newTaskDescription.value;
   
    // newTask.appendChild(removeButton)
    
    

    
    // appendNewTask(newTask);
    // event.target.reset();
  }

// callback function for creating new task
//   let appendNewTask = function(task){
//     document.getElementById('tasks').appendChild(task);
//     event.target.reset();
});

  

