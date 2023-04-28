import { retrieveLocalStorage } from "./retrieveLocalStorage.js";

export function deleteTasksCheckBox(tasks) {
  // Vérifier si la liste des tâches est stockée dans le localStorage
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    // Si oui, récupérer la liste des tâches à partir du localStorage
    tasks = JSON.parse(storedTasks);
  }
  
  // Récupérer toutes les cases à cocher de la liste des tâches qui sont cochées
  const checkBoxes = document.querySelectorAll(
    '.content__list input[type="checkbox"]:checked'
  );

  // Check if checkBoxes is empty
  if (checkBoxes.length === 0) {
    return;
  }

  // Supprimer les tâches correspondantes de la liste et du DOM
  checkBoxes.forEach(checkBox => {
    const index = Array.from(checkBoxes).indexOf(checkBox);
    tasks.splice(index, 1);
    checkBox.parentNode.remove();
  });

  // Stocker la nouvelle liste des tâches dans le localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function deleteTask(index) {
  const tasks = retrieveLocalStorage();

  if (tasks) {
    // Vérifie s'il y a des tâches
    tasks.splice(index, 1); // Si c'est le cas splice() supprime à l'index spécifié
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Sauvegarde du tableau
  }
}
