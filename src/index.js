document.addEventListener("DOMContentLoaded", (e) => {
  getAndDisplayTodo()
});

let getAndDisplayTodo = function(e) {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    let content = document.getElementById('new-task-description').value
    let li = document.createElement('li');
    li.innerHTML += `<p>${content}</p> <a href="#" onclick="deleteLi(this)">Delete</a> <select onchange="priority(this)"><option value="red">Red</option><option value="yellow">Yellow</option><option value="green">Green</option></select>`
    document.getElementById('tasks').appendChild(li);
  })
}

function deleteLi(link) {
  link.parentNode.parentNode.removeChild(link.parentNode);
}

function priority(link) {
  link.parentElement.querySelector('p').style.color = link.value
}


