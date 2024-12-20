const taskInput = document.getElementById("Input");
const taskList = document.getElementById("taskList");

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
    <button onclick="editTask(this)">Edit</button>
    <button  class="text-[red] text-[18px] gap-[10px] onclick="deleteTask(this)">Delete</button>
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
