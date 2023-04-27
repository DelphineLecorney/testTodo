export function deleteTasksCheckBox(tasks, index) {
  // Vérifier si la liste des tâches est stockée dans le localStorage
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    // Si oui, récupérer la liste des tâches à partir du localStorage
    tasks = JSON.parse(storedTasks);
  }
  
  // Récupérer toutes les cases à cocher de la liste des tâches
  const checkBox = document.querySelectorAll(
    '.content__list input[type="checkbox"]'
  );
  
  // Vérifier si l'index est valide
  if (index >= 0 && index < tasks.length) {
    // Supprimer la tâche correspondante de la liste
    tasks.splice(index, 1);
    checkBox[index].parentNode.remove();

    // Stocker la nouvelle liste des tâches dans le localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
