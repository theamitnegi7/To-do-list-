function TodayTasks() {
    let divs = document.querySelectorAll(".list");

    let a = JSON.parse(localStorage.getItem("deltodaytasks"));
    let div=divs[0];
    for (let b of a) {
      let element = document.createElement("div");
      element.setAttribute("class", "taskcard")
      element.innerHTML = b;
      div.appendChild(element);
    }
  
  }
  

  function TomTasks() {
    let divs = document.querySelectorAll(".list");

    let a = JSON.parse(localStorage.getItem("deltomtasks"));
    let div=divs[1];
    for (let b of a) {
      let element = document.createElement("div");
      element.setAttribute("class", "taskcard")
      element.innerHTML = b;
      div.appendChild(element);
    }
  
  }


  function Future() {
    let divs = document.querySelectorAll(".list");

    let a = JSON.parse(localStorage.getItem("delfuture"));
    let div=divs[2];
    for (let b of a) {
      let element = document.createElement("div");
      element.setAttribute("class", "taskcard")
      element.innerHTML = b;
      div.appendChild(element);
    }
  
  }

  window.onload = TodayTasks();
  window.onload = TomTasks();
  window.onload = Future();


  