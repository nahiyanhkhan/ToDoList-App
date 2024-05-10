const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function handleEnter(event){
    if(event.keyCode === 13){
        addTask();
    }
}

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(c){
    if(c.target.tagName === "LI"){
        c.target.classList.toggle("checked");
        saveData();
    }
    else if(c.target.tagName === "SPAN"){
        if(confirm("Do you want to delete the task?"))
        c.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();