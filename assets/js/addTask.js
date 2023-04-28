import { deleteTask } from "./deleteTask.js";
import { retrieveLocalStorage } from "./retrieveLocalStorage.js";

// Appel de la fonction pour récupérer les tâches
const tasks = retrieveLocalStorage();

export function addTask() {

  // Récupère la valeur de l'input
  const input = document.getElementById("input-task");
  const taskName = input.value;
  input.value = "";

  // Crée un nouvel élément li pour la tâche
  const li = document.createElement("li");

  // Crée un élément checkbox pour la tâche
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "task-checkbox");
  checkbox.setAttribute("value", taskName);

  // Crée un élément span pour afficher le nom de la tâche
  const span = document.createElement("span");
  span.innerText = taskName;

  // Crée un bouton de suppression pour la tâche
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.innerText = "Delete";
  button.addEventListener("click", function () {
    deleteTask(tasks.indexOf(taskName));
    li.remove();
  });

  // Ajoute la checkbox, le span et le bouton à l'élément li
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  // Ajoute l'élément li à la liste de tâches
  const list = document.querySelector(".content__list");
  list.appendChild(li);

  tasks.push(taskName);
  // Stocke la liste des tâches dans le localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
