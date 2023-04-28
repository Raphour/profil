// Tableau contenant les dialogues
var dialogues = [
  "Premier dialogue",
  "Deuxième dialogue",
  "Troisième dialogue"
];

// Récupération des éléments du DOM
window.onload = function() {
    
  var texteDialogue = document.querySelector("#texte-dialogue");
  var boutonPrecedent = document.querySelector("#bouton-precedent");
  var boutonSuivant = document.querySelector("#bouton-suivant");
  let isDisplayingText = false;

  // Initialisation des variables
  var indexDialogue = 0;

  function afficherLettre(texte) {
    if(isDisplayingText){
      return;
    }
    isDisplayingText = true;
    let index = 0;
    texteDialogue.textContent = "";
    const intervalId = setInterval(() => {
      texteDialogue.textContent += texte[index];
      index++;
      if (index === texte.length) {
        clearInterval(intervalId);
        isDisplayingText = false;
      }
    }, 50);
  }
  // Fonction pour afficher le dialogue suivant
  function afficherDialogueSuivant() {
    indexDialogue = dialogues.indexOf(texteDialogue.textContent)+1;
    var nouveauDialogue = dialogues[indexDialogue];
    afficherLettre(nouveauDialogue);
    if(indexDialogue == dialogues.length-1){
      boutonSuivant.disabled = true;
    }
    boutonPrecedent.disabled = false;
  }

  // Fonction pour afficher le dialogue précédent
  function afficherDialoguePrecedent() {
    indexDialogue = dialogues.indexOf(texteDialogue.textContent)-1;
    var nouveauDialogue = dialogues[indexDialogue];
    afficherLettre(nouveauDialogue);
    if(indexDialogue == 0){
      boutonPrecedent.disabled = true;
    }
    boutonSuivant.disabled = false;
    


    
  }

  

  // ajout d'un eventlistenter sur le bouton suivant
  boutonSuivant.addEventListener("click", afficherDialogueSuivant);
  // pareil pour le bouton précédent
  boutonPrecedent.addEventListener("click", afficherDialoguePrecedent);
}

