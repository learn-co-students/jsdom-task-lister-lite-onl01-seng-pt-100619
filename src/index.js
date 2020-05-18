document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form")
    console.log("this is working",form)
  
    let textBox =  document.getElementById("new-task-description")
    // let button = form.querySelectorAll('input')[1]
    
    let tasks = document.getElementById('tasks') // ul
    
    form.addEventListener("submit", function(event) {
      event.preventDefault()
      console.log("button clicked")
      let li = document.createElement("li")
      li.innerText = textBox.value    //form.innerText
      tasks.append(li)
    })
});



//As a user, I should be able to type a task into the input field.
//As a user, I should be able to click some form of a submit button.
//As a user, the task string that I provided should appear on the DOM after the submit button has been activated.