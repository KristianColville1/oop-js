document.addEventListener("DOMContentLoaded", () => {

    // need to create suduko logic for generating boards for the player;
    // we have 9 red cubes each holding 9 black cubes
    // every red cube needs 1-9 and every black cube needs to equal 1-9 horizontal and vertical

    // how can I layer elements and cheat in not creating over complicated logic?

    // I need to create a new game board each time for the player and have different difficulty levels for

    // Solution One: create a minimal viable product and then work out the kinks
    // Solution Two: watch tutorials like an idiot
    // Solution Three: Code it ffs

    // Solution Three accepted.

    // Game board:
    // 9 red cubes
    // 81 black cubes
    // needs to change color when hovered over by user

    // How the hell can you do this without knowing math..
    // okay so we have the ability to create arrays and dictionaries...
    // It might be easier to put the black cubes inside the red cubes creating a multidimensional array?

    // width <- horizonal, height <- vertical


    // width
    // width

    // begin with testing the ability to enter numbers 1 - 9 in just black cubes;

    // select the elements we want to test
    const redCubes = document.querySelectorAll('.grid-1 div');
    const blackCubes = document.querySelectorAll('.grid-2 div'); // black cubes same as numbers below
    const currentNumber = document.querySelectorAll('.grid-2 div')

    // need variables for the different directions for the black and red cubes.
    const startButton = document.querySelector('.start');
    const lastIndex = 0;
    const length = 9;
    const width = 9;
    let divText = '';
    const blackCubesArray = [ 0,
        1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 
        21, 22, 23, 24, 25, 26, 
        27, 28, 29, 30, 31, 32,
        33, 34, 35, 36, 37, 38, 
        39, 40, 41, 42, 43, 44,
        45, 46, 47, 48, 49, 50, 
        51, 52, 53, 54, 55, 56, 
        57, 58, 59, 60, 61, 62, 
        63, 64, 65, 66, 67, 68, 
        69, 70, 71, 72, 73, 74, 
        75, 76, 77, 78, 79, 80]; // all positions 1 - 81

    function runGame(){
        // when game begins remove all the numbers on the board
        // blackCubesArray.forEach(index => blackCubes[index].classList.remove('number'));

        // need to create 1-81 black cubes
        divText = 1;
        blackCubes.innerText = divText;
        blackCubesArray.forEach(index => blackCubes[index].innerText = divText++);

    }

    startButton.addEventListener('click', runGame);
});