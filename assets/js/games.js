var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    character.classList.add("animate-c");
    setTimeout(function(){
        character.classList.remove("animate-c");
    }, 1000);
}