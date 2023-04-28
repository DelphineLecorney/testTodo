
import { updateDate } from "./updateDate.js";
import { addTask } from "./addTask.js";
import { displayTasks } from "./displayTasks.js";
import { deleteTasksCheckBox } from "./deleteTask.js";
import { retrieveLocalStorage } from "./retrieveLocalStorage.js";

// Mettre à jour la date dans la page.
updateDate();
setInterval(updateDate, 24 * 60 * 60 * 1000);

// Appel de la fonction pour récupérer les tâches
const tasks = retrieveLocalStorage();

// Ajout d'un écouteur d'événement submit qui empêche le formulaire
// de se soumettre et appelle la fonction addTask
const form = document.querySelector(".content__form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre
  addTask();
});

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
displayTasks(tasks);
