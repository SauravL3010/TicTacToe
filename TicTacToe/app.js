document.addEventListener("DOMContentLoaded", ()=>{
    let tiles = document.querySelectorAll(".grid div");
    let playerSel= document.querySelector(".player");
    let resetbtn = document.querySelector(".btn");

    // Player win check 
    let grid = ["", "", "", "", "", "", "", "", ""];
    // winning 
    const winning = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function isWinner(){
        for (let i = 0; i <= 7; i++) {
            const winStatus = winning[i];
            let a = grid[winStatus[0]];
            let b = grid[winStatus[1]];
            let c = grid[winStatus[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                // playerSel.textContent = playerSel.textContent + " has WON !!! ----- Click Reset Game";
                alert(playerSel.textContent + " has WON the GAME ---- RESTART GAME");
                break;
            }
        }
    };


    let tileArray = Array.from(tiles);  // Create an array out of NodeList

    let player = "Player X";

    function reset(){
        tiles.forEach((tile)=>{
            tile.classList.remove("playerX", "playerO");
            playerSel.textContent="Player X";
        });
    };


    tiles.forEach((tile)=>{
        tile.addEventListener("click", (event)=>{
            let index = tileArray.indexOf(event.target);
            if (playerSel.textContent==="Player X"){
                grid[index] = "X";
                isWinner();
                // console.log(grid);
                tiles[index].classList.add("playerX");
                playerSel.textContent = "Player O";
            }else{
                grid[index] = "O";
                isWinner();
                tiles[index].classList.add("playerO");
                playerSel.textContent = "Player X";
            };
        });
    });

    resetbtn.addEventListener("click", ()=>{
        reset();
    });


});   

