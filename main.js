let tasks=document.getElementsByClassName("tasksSection");
let text=document.getElementById("textVal");
let inProgress=document.getElementById("inProgress");
let count=0;

function addtask(){
    let val=text.value; 
    let element=document.createElement("p");
    element.innerHTML= `${val}`; 
    element.setAttribute("draggable", true);
    element.setAttribute("id",count++);
    element.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", this.id);
    });
    inProgress.appendChild(element);

}


for (let index = 0; index < tasks.length; index++) {
   tasks[index].addEventListener("dragover", function (event) {
    event.preventDefault();
  });
  tasks[index].addEventListener("drop", function (event) {
    let draggedID = event.dataTransfer.getData("text");
    let tasks = document.getElementById(draggedID);
    this.appendChild(tasks);
  });
} 