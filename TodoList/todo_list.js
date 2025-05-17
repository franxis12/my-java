const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompleteBtn = document.getElementById("clearCompletedBtn");
const clearAllTaskBtn = document.getElementById("clearAllTaskBtn");



let tasks = [{text: "Francis"}];

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== "") {
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTask();
    } 
}

function displayTask(){
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);    
    });
}

function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;
    displayTask();


}

function clearCompletedTask(){
    tasks = tasks.filter(task => !task.complted);
    displayTask();
}

function clearAllTask(){
    tasks.splice(0, tasks.length);
    displayTask();
}



addTaskBtn.addEventListener("click", addTask);
clearCompleteBtn.addEventListener("click", clearCompletedTask);
clearAllTaskBtn.addEventListener("click", clearAllTask);
displayTask();
