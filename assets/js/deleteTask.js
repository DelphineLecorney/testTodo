export function deleteTask(index) {
  // localStorage.getItem : récupérer les tâches existantes dans le stockage local
  // Analyse la chaîne JSON en un tableau JavaScript en utilisant JSON.parse().
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    // Vérifie s'il y a des tâches
    tasks.splice(index, 1); // Si c'est le cas splice() supprime à l'index spécifié
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Sauvegarde du tableau
  }
}

