

export function deleteTasksCheckBox(tasks, index) {
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
