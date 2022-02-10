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
    const blackCubes = document.querySelectorAll('.grid-2 div');

    // need variables for the different directions for the black and red cubes.
    const blackWidth = 9;

    function runGame(){

    }

    runGame();
})