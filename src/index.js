document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener("submit", function(e) {
    let textInput = document.getElementById('new-task-description').value;
    document.getElementById('tasks').innerHTML += `<li> ${textInput} <a href="#" onclick="parentNode.parentNode.removeChild(parentNode)">Delete</a></li>`;
    e.preventDefault();
  });
});