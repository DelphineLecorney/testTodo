// Mettre à jour l'affichage de la date actuelle
export function updateDate() {
    let now = new Date();
    let date = now.getDate();
    let month = now.toLocaleString('default', { month: 'long' });
    let year = now.getFullYear();
    let formattedDate = date + " " + month + " " + year;
    document.getElementById("current-date").textContent = formattedDate;
    document.getElementById("current-date").datetime = now.toISOString();
}
