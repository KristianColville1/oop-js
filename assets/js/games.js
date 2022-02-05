var character = document.getElementById('character');
var block = document.getElementById('block');
function jump(){
    if(character.classList !== 'animate-c'){
        character.classList.add('animate-c');
    }
    setTimeout(function(){
        character.classList.remove('animate-c');
    }, 1000);
}

var checkIfDead = setInterval(function(){
    var charactersTopPos = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeftPos = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeftPos < 180 && blockLeftPos > 100 && charactersTopPos >= 470){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('You lose ha ha ha..');
    }
}, 10);