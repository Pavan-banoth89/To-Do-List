const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task function
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task";

  const span = document.createElement("span");
  span.textContent = taskText;

  const btnDiv = document.createElement("div");
  btnDiv.className = "btns";

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✔️";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.style.transform = "translateX(100%)";
    li.style.opacity = "0";
    setTimeout(() => li.remove(), 400);
  };

  btnDiv.appendChild(completeBtn);
  btnDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnDiv);
  taskList.appendChild(li);

  taskInput.value = "";
}
