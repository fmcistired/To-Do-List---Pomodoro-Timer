// variables
const inputTask = document.getElementById("input-task");
const taskContainer = document.getElementById("task-container");


// error messages
var messages = ["bro seriously...",
                "so you're not gonna do anything today...",
                "lazy...",
                "bro wtf??" ];

// addTask function
function addTask(){
    
    if(inputTask.value == ''){
        var i = Math.floor(Math.random()*messages.length);
        alert(messages[i])
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        taskContainer.appendChild(li);

        // create a "x" symbol
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = "";
    saveData();
}

// click function (check & remove task)

taskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// save tasks function
function saveData(){
    localStorage.setItem("data", taskContainer.innerHTML);  
}

// display tasks
function showTask(){
    taskContainer.innerHTML = localStorage.getItem("data");
}
showTask();