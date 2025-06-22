const API_URL = "/api/tasks";

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${task.title}</strong> - ${task.description} [${task.status}]
      <button onclick="deleteTask('${task._id}')">❌</button>
      <button onclick="showEditForm('${task._id}', '${task.title}', '${task.description}', '${task.status}')">✏️ Edit</button>
    `;
    list.appendChild(li);
  });
}

document.getElementById("taskForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description })
  });

  document.getElementById("taskForm").reset();
  fetchTasks();
});

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTasks();
}

function showEditForm(id, title, description, status) {
  const newTitle = prompt("New Title:", title);
  const newDesc = prompt("New Description:", description);
  const newStatus = prompt("New Status (pending/completed):", status);

  if (newTitle && newStatus) {
    updateTask(id, newTitle, newDesc, newStatus);
  }
}

async function updateTask(id, title, description, status) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, status })
  });
  fetchTasks();
}

fetchTasks();
