document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener("submit", function(e) {
    let text_input = document.getElementById('new-task-description').value;
    document.getElementById('tasks').innerHTML += `<li> ${text_input} <a href="#" onclick="parentNode.parentNode.removeChild(parentNode)">Delete</a></li>`;
    e.preventDefault();
  });
});