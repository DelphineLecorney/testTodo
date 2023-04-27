import { deleteTasksCheckBox } from "./deleteTasksCheckBox.js";

let tasks = [];
const tasksFromLocalStorage = localStorage.getItem("tasks");

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
    // const li = document.createElement("li");
    // const checkbox = document.createElement("input");
    // checkbox.type = "checkbox";
    // checkbox.name = "task-checkbox";
    // checkbox.value = task;

    const span = document.createElement("span");
    span.innerText = task;

    // const button = document.createElement("button");
    // button.textContent = "Delete";

     // Crée un bouton de suppression pour la tâche
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = "Delete";
    button.addEventListener("click", function() {
      deleteTask(tasks.indexOf(taskName));
      li.remove();
    });

    button.addEventListener("click", function () {
      const list = document.querySelector(".content__list");
      const checkboxes = list.querySelectorAll("input[type='checkbox']");

      checkboxes.forEach(function (checkbox, i) {
        if (checkbox.checked) {
          const index = i;
          if (index >= 0 && index < tasks.length) {
            deleteTasksCheckBox(index);
            list.removeChild(checkbox.parentNode);
          }
        }
      });
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);

    const list = document.querySelector(".content__list");
    list.appendChild(li);
  });
}
