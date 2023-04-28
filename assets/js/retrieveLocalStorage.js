export function retrieveLocalStorage() {
  let tasks = [];

  // Récupère les tâches stockées
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  // Vérifie s'il y a des tâches
  if (tasksFromLocalStorage) {
    try {
      tasks = JSON.parse(tasksFromLocalStorage);
    } catch (error) {
      console.error("Error parsing tasks from localStorage", error);
    }
  }

  return tasks;
}
