// Mettre à jour l'affichage de la date actuelle

export function updateDate() {
    let now = new Date();
    let date = now.getDate();
    let month = now.toLocaleString('default', { month: 'long' });
    let year = now.getFullYear();
    let dayOfWeek = now.toLocaleString('default', { weekday: 'long' });
    dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1); // Mettre la première lettre en majuscule
    let formattedDate = dayOfWeek + ", " + date + " " + month + " " + year;
    document.getElementById("current-date").textContent = formattedDate;
    document.getElementById("current-date").datetime = now.toISOString();
}
