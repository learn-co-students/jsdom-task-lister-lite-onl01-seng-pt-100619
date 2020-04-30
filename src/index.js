document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  const uList = document.getElementById('tasks');
  
  
  form.addEventListener('submit', function(event){
    event.preventDefault(); // prevent form from submitting causing reload of page
    let li = document.createElement('li');
    li.innerText = input.value;
    uList.appendChild(li);
    event.target.reset(); // reset input field after value has been submitted
  })

});




   