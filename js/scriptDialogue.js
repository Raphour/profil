// Tableau contenant les dialogues
var dialogues = [
    "Premier dialogue",
    "Deuxième dialogue",
    "Troisième dialogue"
  ];
  
  // Récupération des éléments du DOM
  var texteDialogue = document.getElementById("texte-dialogue");
  var boutonPrecedent = document.getElementById("bouton-precedent");
  var boutonSuivant = document.getElementById("bouton-suivant");
  
  // Initialisation des variables
  var indexDialogue = 0;
  
  // Fonction pour afficher le dialogue suivant
  function afficherDialogueSuivant() {
    indexDialogue++;
    texteDialogue.innerHTML = dialogues[indexDialogue];
    boutonPrecedent.disabled = false;
    if (indexDialogue === dialogues.length - 1) {
      boutonSuivant.disabled = true;
    }
  }
  
  // Fonction pour afficher le dialogue précédent
  function afficherDialoguePrecedent() {
    indexDialogue--;
    texteDialogue.innerHTML = dialogues[indexDialogue];
    boutonSuivant.disabled = false;
    if (indexDialogue === 0) {
      boutonPrecedent.disabled = true;  
    }
  }


  
