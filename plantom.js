
function add() {
  let text = document.getElementById("tasks");
  if (localStorage.getItem("tomtasks") == null) {
    let a = [];
    a.push(text.value);
    localStorage.setItem("tomtasks", JSON.stringify(a));

  }
  else {

    let a = JSON.parse(localStorage.getItem("tomtasks"));
    a.push(text.value);
    localStorage.setItem("tomtasks", JSON.stringify(a));

  }
  text.value = "";
  text.focus();
  location.reload()

}

function displayTasks() {
  let div = document.querySelector("#list");
  let a = JSON.parse(localStorage.getItem("tomtasks"));
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
  else{
    console.log("inside else");
    let div = document.querySelector("#list");
    let element = document.createElement("div");
    element.setAttribute("class", "taskcard")
    element.innerHTML = 'Add Tasks and Plan your tomorrow for better future';
    div.appendChild(element);
  }

}

function deletetask(event) {

  let taskCard = event.target.closest('.taskcard');
  let taskText = taskCard.firstChild.textContent.trim();

  let b = [];
  if (localStorage.getItem("deltomtasks") == null) {
    let a = [];
    a.push(taskText);
    localStorage.setItem("deltomtasks", JSON.stringify(a));

  }
  else {

    let a = JSON.parse(localStorage.getItem("deltodaytasks"));
    a.push(taskText);
    localStorage.setItem("deltomtasks", JSON.stringify(a));

  }


  let a = JSON.parse(localStorage.getItem("tomtasks"));
  let index = a.indexOf(taskText);
  console.log(index);
  if (index == 0) {
    a.splice(index, 1);
  }
  else {
    a.splice(index, index);
  }
  localStorage.setItem("tomtasks", JSON.stringify(a));
  location.reload()



}
window.onload = displayTasks();




