document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  let newList = document.getElementById("new-task-description");
  let tasks = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    let list = document.createElement('list')
    list.innerText = newList.value
    tasks.append(list)
  });

});
