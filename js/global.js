// global.js 

//console.log("global.js chargé");

const buttonNAV = document.querySelector("nav i.iconBurger button");
const NAV = document.querySelector("nav");

buttonNAV.addEventListener("click", (event) => {    
    NAV.classList.toggle("open");
});

// Données de l'exemple
document.querySelector("input#villeDepart").value="Vignoc";
document.querySelector("input#heureDepart").value="07:43";
document.querySelector("#Duree").textContent="+ 17 min";
document.querySelector("input#villeArrivee").value="Rennes";
document.querySelector("input#heureArrivee").value="08:00";
let choixJours=[1, 1, 1, 1, 1, 0, 0];

//On crée un objet vide pour mettre l'ensemble des checkboxes des jours
const checkboxes = {};
for (let i = 1; i <= 7; i++) {
    // Dans l'objet checkboxes à la propriété J1 à J7, on associe les input#J1 à input#J7)
    checkboxes[`J${i}`] = document.getElementById(`J${i}`);
    // On coche les jours en fonction du tableau choixJours
    if (choixJours[i-1]) { checkboxes[`J${i}`].checked = true;}
}

