document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.getElementsByTagName("input")[1].addEventListener("click", function (event) {
    event.preventDefault()
    let task = document.getElementById("new-task-description").value

    var node = document.createElement("li");
    var textNode = document.createTextNode(task);

    node.appendChild(textNode);
    document.getElementById("tasks").appendChild(node)


  })


});