import { addTask } from "./addTask.js";
import { deleteTasksCheckBox } from "./deleteTasksCheckBox.js";
import { updateDate } from "./updateDate.js";
import { displayTasks } from "./displayTasks.js";
import { deleteTask } from "./deleteTask.js";
// updateDate est appelé immédiatement et ensuite toutes
// les 24 heures à l'aide de la fonction setInterval pour
// mettre à jour la date dans la page.
updateDate();
setInterval(updateDate, 24 * 60 * 60 * 1000);


// Ajout d'un écouteur d'événement submit qui empêche le formulaire de se
// soumettre lorsqu'il est soumis et appelle la fonction addTask
const form = document.querySelector(".content__form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre
  addTask();
});

export let tasks = [];
const tasksFromLocalStorage = localStorage.getItem("tasks");

if (tasksFromLocalStorage) {
  try {
    tasks = JSON.parse(tasksFromLocalStorage);
  } catch (error) {
    console.error("Error parsing tasks from localStorage", error);
  }
}
deleteTask(tasks);
displayTasks(tasks);

const deleteButton = document.querySelector(".content__delete-btn");
deleteButton.addEventListener("click", function () {
  const list = document.querySelector(".content__list");
  const checkboxes = list.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(function (checkbox, index) {
    if (checkbox.checked) {
      deleteTasksCheckBox(tasks, index);
    }
  });
});

