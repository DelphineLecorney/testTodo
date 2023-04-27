import { addTask } from "./addTask.js";
import { deleteTasksCheckBox } from "./deleteTasksCheckBox.js";
import { updateDate } from "./updateDate.js";
import { displayTasks } from "./displayTasks.js";
import { deleteTask } from "./deleteTask.js";

// Mettre à jour la date dans la page.
updateDate();
setInterval(updateDate, 24 * 60 * 60 * 1000);

// Ajout d'un écouteur d'événement submit qui empêche le formulaire
// de se soumettre et appelle la fonction addTask
const form = document.querySelector(".content__form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre
  addTask();
});

export let tasks = [];
// Récupère les tâches stockées
const tasksFromLocalStorage = localStorage.getItem("tasks");
// Vérifie s'il y a des tâches
if (tasksFromLocalStorage) {
  try { // Conversion en JSON pour stocker
    tasks = JSON.parse(tasksFromLocalStorage);
  } catch (error) { // Message au cas où cela échoue
    console.error("Error parsing tasks from localStorage", error);
  }
}
deleteTask(tasks);
displayTasks(tasks);
// Ajout d'un event
const deleteButton = document.querySelector(".content__delete-btn");
deleteButton.addEventListener("click", function () {
  const list = document.querySelector(".content__list");
  const checkboxes = list.querySelectorAll("input[type='checkbox']");
  // Vérifie les checkbox cochées
  checkboxes.forEach(function (checkbox, index) {
    if (checkbox.checked) {
      deleteTasksCheckBox(tasks, index);
    }
  });
});

