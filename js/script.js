
function changeImage(element) {
    var image = element.querySelector("img");
    var nouvelleImage = "../assets/menu_button_hover.png";
    image.src = nouvelleImage;
    element.style.width = "105%";
}


function resetImage(element) {
    var image = element.querySelector("img");
    var nouvelleImage = "../assets/menu_button.png";
    image.src = nouvelleImage;
    element.style.width = "100%";
}
