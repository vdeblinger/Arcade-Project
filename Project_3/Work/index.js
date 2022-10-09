// const row = event.target.id.slice()
// "row1-col1" row; 3 col; 8

let gameState = {
    gameBoard: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    players: ["nameOfPlayerOne", "nameOfPlayerTwo"],
    score: [0, 0],
    currentPlayerName: "",
    currentPlayer: "X",
    playerOne: "",
    playerTwo: ""

}



let gameBoardContainer = document.getElementById("ttt-board")

function createGameBoard () {

    for (let numberOfRows = 0; numberOfRows < gameState.gameBoard.length; numberOfRows++) {
        let newRowEle = document.createElement("div");
        newRowEle.classList.add("row");

        let currentRow = gameState.gameBoard[numberOfRows];

        for (let numOfCells = 0; numOfCells < currentRow.length; numOfCells++) {
            let newCellEle = document.createElement("div")
            newCellEle.classList.add("cell")
            newCellEle.classList.add(`row-num${numOfCells}`)
            newCellEle.id = `columnNum${numberOfRows}`
            console.log(newCellEle)
            function playerOneMove(event) {
                
                console.log("This is event dot target", event.target.classList)
                console.log(event.target.id)
                newCellEle.textContent = gameState.currentPlayer
                if (gameState.currentPlayer == "X") {
                    gameState.currentPlayer = "O"
                } else { 
                    gameState.currentPlayer ="X"
                }
                // put code .slice/convert to number parseInt/ then add to gameBoard
                function areYouWinningSon() {
                    
                    for (let i = 0; i < gameState.gameBoard.length; i++) {
                        let xValue = 0;
                        let oValue = 0;
                
                    
                        for(let j = 0; j < gameState.gameBoard[i].length; j++) {
                            let currentCell = gameState.gameBoard[i][j]
                            if(currentCell == "X" ) {
                                xValue = xValue + 1
                            } else if (currentCell == "O") {
                                oValue = oValue + 1
                            }
                        }
                        console.log('X value is', xValue)
                        console.log('O value is', oValue)

                        if(xValue == 3) {
                            alert("PLAYER X HAS WON!")
                        } else if(oValue == 3) {
                            alert("PLAYER O HAS WON!")
                        }
                    }
                
                }
                areYouWinningSon()
            }
            newCellEle.addEventListener("click", playerOneMove)
            if (currentRow[numOfCells] !=null) {
                newCellEle.textContent = currentRow[numOfCells];
            } else {
                newCellEle.textContent = ""
            }
            newRowEle.appendChild(newCellEle)
        }
        gameBoardContainer.appendChild(newRowEle)
    }
    
}
document.addEventListener("DOMContentLoaded", createGameBoard)

function randomNumGenerator() {
    let randomNumber = Math.random()
    console.log(randomNumber)
    
    if(randomNumber < 0.5) {
        gameState.playerOne = gameState.players[0]
        gameState.playerTwo = gameState.players[1]
    } else {
        gameState.playerOne = gameState.players[1]
        gameState.playerTwo = gameState.players[0]
    }

}
console.log(randomNumGenerator())
console.log(randomNumGenerator())
console.log(randomNumGenerator())


//PLAYER ONE
let nameElementInputOne = document.getElementById("playerone")
console.log(nameElementInputOne)
let playerOneSubmitBttn = document.getElementById("submitp1")
let nameDisplayedForPlayerOne = document.getElementById("p1name")
//PLAYER TWO
let nameElementInputTwo = document.getElementById("playertwo")
let playerTwoSubmitBttn = document.getElementById("submitp2")
let nameDisplayedForPlayerTwo = document.getElementById("p2name")

function displayNameFunction (event) {
    event.preventDefault()
    let enteredName = nameElementInputOne.value;
    gameState.currentPlayerName = enteredName;
    nameDisplayedForPlayerOne.textContent = `P1: ${gameState.currentPlayerName}`;

}
playerOneSubmitBttn.addEventListener("click", displayNameFunction);

function displayNameFunctionTwo (event) {
    event.preventDefault()
    let enteredNameTwo = nameElementInputTwo.value;
    gameState.currentPlayerName = enteredNameTwo;
    nameDisplayedForPlayerTwo.textContent = `P2: ${gameState.currentPlayerName}`;
}
playerTwoSubmitBttn.addEventListener("click", displayNameFunctionTwo);

//winning combinations
// function areYouWinningSon() {
//     for (let i = 0; i < gameState.gameBoard.length; i++) {
//         let xValue = 0;
//         let oValue = 0;

    
//         for(let j = 0; j < gameState.gameBoard[i].length; j++) {
//             let currentCell = gameState.gameBoard[i][j]
//             if(currentCell == "X" ) {
//                 xValue = xValue + 1
//             } else if (currentCell == "O") {
//                 oValue = oValue + 1
//             }
//         }
//         if(xValue == 3) {
//             alert("PLAYER X HAS WON!")
//         } else if(oValue == 3) {
//             alert("PLAYER O HAS WON!")
//         }
//     }

// }
// [null, null, null],
// [null, null, null],
// [null, null, null]