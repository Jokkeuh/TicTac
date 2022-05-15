

const drawBoard = () => {
    
    
    let board = [null, null, null, null, null, null, null, null, null]

    const playerOne= "O";
    const playerTwo = "X";
    let currentPlayer = playerOne;
    let score = false;

    const startBtn = document.getElementById("game-start")
    const resetBtn = document.getElementById("restart");
    const boardToggle = document.getElementById("game-board")
    boardToggle.style.display ="none"
   

    const __startScreen = () => {
        //boardToggle.style.display ="none"
        

        if(boardToggle.style.display !== "none"){
           boardToggle.style.display ="none"
           console.log("empty")
        }else{
            boardToggle.style.display = ""
            console.log("")
        }
        
    }
    startBtn.addEventListener("click", __startScreen)
    resetBtn.style.display = "none"
    const __squareClicked = (e) => {
        resetPopup()
        const id = e.target.id;
        console.log(id);
        if(!board[id]){
            board[id] = currentPlayer;
            e.target.innerText = currentPlayer;
            
          if(winStates(currentPlayer) === true){
            console.log(`${currentPlayer} wins!`)
            const victoryName = document.getElementById("victoryPlayer")
            victoryName.innerText = `${currentPlayer} wins!`
            score++
          }
           

            if (currentPlayer === playerOne){
                currentPlayer = playerTwo
            }else 
            if(currentPlayer === playerTwo){
                currentPlayer = playerOne;
            };
            
        }
        
    }


    const squares = Array.from(document.querySelectorAll("div.board-square"));
    console.log(squares)

    squares.forEach((square, index) => {

        let styles ="";


        if(index < 5){
            styles = "border: 3px solid green; font-size: 135px;"
        }
        if(index % 3 === 0 ){
            styles = "border: 3px solid red; font-size: 135px;"
        }
        if(index % 3 === 2){
            styles = "border: 3px solid blue; font-size: 135px;"
        }
        if(index > 5){
            styles = "border: 3px solid orange; font-size: 135px;"
        }
        square.style = styles;

        square.addEventListener("click",__squareClicked)
    });


    


    
    
    const __resetScreen = () =>{
        console.log(board)
        board.forEach((b, index) => {
            
            if(board!=null){
                board[index] = null;
            }
            console.log(resetBtn + "clicked")
            
        });
        squares.forEach((square) => {
            square.innerText ="";
        })
        currentPlayer = playerOne;
        console.log(board)
    }

    resetBtn.addEventListener("click", __resetScreen);
    
    const resetPopup = () =>{
        if(board.includes("O")){
            resetBtn.style.display = ""
        }
    }

    let victory = document.getElementById("victory")
    victory.style.display = "none"

    const closeBtn = document.getElementById("closeBtn")
    const victoryScreen = () => {
        
        if(victory.style.display !== "none"){
            victory.style.display ="none"
            
         }else{
             victory.style.display = ""
             console.log("")
         }
    } 
    closeBtn.addEventListener('click' ,victoryScreen)
    
    
    
    

    let winCondition = false;

    const winStates = (move) => {  // {0,1,2}{0,3,6}{0,4,8}{2,4,6}{2,5,8}{6,7,8}
        
        
        if(winCondition === true){
            __resetScreen()
            winCondition = false
        }
        if(board.includes(null)){

            
            
            if(winCondition === false){

            
                if(board[0] === move){
                    if(board[1] === move && board[2] === move){
                        console.log(`${currentPlayer} wins horizontally`)
                        winCondition = true;
                        victoryScreen()
                        return true
                        
                    }
                }

                if(board[0] === move){
                    if(board[3] === move && board[6]=== move){
                        console.log(`${currentPlayer} wins vertically`)
                        winCondition = true;
                        victoryScreen()
                        return true
                    }
                }

                if(board[0] === move){
                    if(board[4] === move && board[8]=== move){
                        console.log(`${currentPlayer} wins diagonally`)
                        winCondition = true;
                        victoryScreen()
                        return true
                    }
                }

                if(board[1] === move){
                    if (board[4] === move && board[7] === move){
                        console.log(`${currentPlayer} wins vertically`)
                        winCondition = true;
                        victoryScreen()
                        return true
                    }
                }

                if(board[2] === move){
                    if(board[4] === move && board[6] === move){
                        console.log(`${currentPlayer} wins diagonally`)
                        winCondition = true;
                        victoryScreen()
                        return true
                    }
                }

                if(board[2] === move){
                    if(board[5] === move && board[8]=== move){
                        console.log(`${currentPlayer} wins vertically`)
                        winCondition = true;
                        victoryScreen()
                        return true
                    }
                }

                if(board[3] === move){
                    if(board[4] === move && board[5]=== move){
                        console.log(`${currentPlayer} wins vertically`)
                        winCondition = true;
                        victoryScreen()
                        return true
                    }
                }

                if(board[6] === move){
                    if(board[7] === move && board[8]=== move){
                        console.log(`${currentPlayer} wins horizontally`)
                        winCondition = true;
                        victoryScreen()
                        return true
                }

                
            }


        }

        }else{
            console.log("draw")
            console.log("draw")

        }
     }
    }





drawBoard();