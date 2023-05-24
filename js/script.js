
function changeImage(element) {
    var image = element.querySelector("img");
    var nouvelleImage = "../assets/menu_button_hover.png";
    image.src = nouvelleImage;
}


function resetImage(element) {
    var image = element.querySelector("img");
    var nouvelleImage = "../assets/menu_button.png";
    image.src = nouvelleImage;
}

function changeImageMenu(sourceImage){
    document.getElementById("imageMenu").src = sourceImage;
    
}

function resetImageMenu(){
    document.getElementById("imageMenu").src = "../assets/boxe.png";
}
window.onload = function () {
    document.getElementById("ImageMenu").src = "../assets/boxe.png";}
