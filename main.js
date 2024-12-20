const taskInput = document.getElementById("Input");
const taskList = document.getElementById("taskList");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const createdDate = new Date();

document.getElementById("addTaskBtn").onclick = () => {
  if (Input.value.trim()) {
    addTask(Input.value.trim());
    Input.value = "";
  } else {
    alert("Iltimos ma'lumot kiriting");
  }
};

function addTask(taskText) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";
  taskDiv.innerHTML = `
    <span>${taskText}</span>
    <div class="absalute bottom-0 right-0"><span class="hour">${createdDate.getHours()}</span>
      <span class="">:</span>
      <span class="minute ">${createdDate.getMinutes()}</span></div>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(taskDiv);
}

function editTask(button) {
  const taskSpan = button.parentElement.querySelector("span");
  const newTaskText = prompt("Malumot o'zgartiring", taskSpan.textContent);
  if (newTaskText) taskSpan.textContent = newTaskText.trim();
}

function deleteTask(button) {
  button.parentElement.remove();
}

document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((taskText) => addTask(taskText));
}
