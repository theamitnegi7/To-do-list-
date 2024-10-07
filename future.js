
function add() {
  let text = document.getElementById("tasks");
  if (localStorage.getItem("future") == null) {
    let a = [];
    a.push(text.value);
    localStorage.setItem("future", JSON.stringify(a));

  }
  else {

    let a = JSON.parse(localStorage.getItem("future"));
    a.push(text.value);
    localStorage.setItem("future", JSON.stringify(a));

  }
  text.value = "";
  text.focus();
  location.reload()

}

function displayTasks() {
  let div = document.querySelector("#list");
  let a = JSON.parse(localStorage.getItem("future"));
  if (a.length != 0) {
    for (let b of a) {
      let element = document.createElement("div");
      element.setAttribute("class", "taskcard")
      let taskbutton = document.createElement("div");
      taskbutton.setAttribute("class", "taskbutton");
      let element2 = document.createElement("button");
      element2.setAttribute("class", "btn btn-dark")

      element2.addEventListener('click', deletetask);

      element2.innerHTML = '<i class="fa-solid fa-check"></i>';
      element.innerHTML = b;

      div.appendChild(element);
      element.appendChild(taskbutton);
      taskbutton.appendChild(element2);
    }
  }
  else {
    console.log("inside else");
    let div = document.querySelector("#list");
    let element = document.createElement("div");
    element.setAttribute("class", "taskcard")
    element.innerHTML = 'Set future goals';
    div.appendChild(element);
  }

}

function deletetask(event) {

  let taskCard = event.target.closest('.taskcard');
  let taskText = taskCard.firstChild.textContent.trim();


  if (localStorage.getItem("delfuture") == null) {
    let a = [];
    a.push(taskText);
    localStorage.setItem("delfuture", JSON.stringify(a));

  }
  else {

    let a = JSON.parse(localStorage.getItem("delfuture"));
    a.push(taskText);
    localStorage.setItem("delfuture", JSON.stringify(a));

  }

  let a = JSON.parse(localStorage.getItem("future"));
  let index = a.indexOf(taskText);
  console.log(index);
  if (index == 0) {
    a.splice(index, 1);
  }
  else {
    a.splice(index, index);
  }
  localStorage.setItem("future", JSON.stringify(a));
  location.reload()



}
window.onload = displayTasks();




