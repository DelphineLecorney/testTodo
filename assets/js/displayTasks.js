
let tasks = [];
const tasksFromLocalStorage = localStorage.getItem("tasks");
// Vérifie le local storage
if (tasksFromLocalStorage) {
  try {
    tasks = JSON.parse(tasksFromLocalStorage);
  } catch (error) {
    console.error("Error parsing tasks from localStorage", error);
  }
}

export function displayTasks() {
  tasks.forEach((task) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "task-checkbox");
    checkbox.setAttribute("value", task);

    const span = document.createElement("span");
    span.innerText = task;

    // Crée un bouton de suppression pour la tâche
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = "Delete";
    button.addEventListener("click", function() {
      const index = tasks.indexOf(task);
      if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        li.remove();
      }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);

    const list = document.querySelector(".content__list");
    list.appendChild(li);
  });
}
