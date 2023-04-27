// Fonction updateDate qui met à jour la date affichée dans la page HTML.
// Elle commence par créer un nouvel objet Date qui représente la 
// date et l'heure actuelles.
// Elle extrait la date, le mois et l'année de l'objet Date, en 
// utilisant les méthodes getDate() et toLocaleString() avec l'option month: 
// 'long'. Elle concatène ensuite ces valeurs dans une chaîne de caractères 
// formattedDate de la forme date mois année.
// Elle utilise la méthode getElementById pour sélectionner deux éléments HTML 
// dans la page, qui ont les ID "current-date" et met à jour leur contenu en 
// utilisant les valeurs formatées formattedDate et la méthode toISOString() 
// de l'objet Date, respectivement.

export function updateDate() {
    let now = new Date();
    let date = now.getDate();
    let month = now.toLocaleString('default', { month: 'long' });
    let year = now.getFullYear();
    let formattedDate = date + " " + month + " " + year;
    document.getElementById("current-date").textContent = formattedDate;
    document.getElementById("current-date").datetime = now.toISOString();
}
