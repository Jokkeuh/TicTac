







    



const drawBoard = () => {
    
    
    let board = [null, null, null, null, null, null, null, null, null]

    const playerOne= "O";
    const playerTwo = "X";
    let currentPlayer = playerOne;
    let score = false;

    const startBtn = document.getElementById("game-start")
    const boardToggle = document.getElementById("game-board")
    boardToggle.style.display ="none"
   

    const __startScreen = () => {
        //boardToggle.style.display ="none"
        

        if(boardToggle.style.display !== "none"){
           boardToggle.style.display ="none"
           console.log("empty")
        }else{
            boardToggle.style.display = ""
            console.log("block")
        }
        
    }
    startBtn.addEventListener("click", __startScreen)
    
   

    

    

    const __squareClicked = (e) => {
        const id = e.target.id;
        console.log(id);
        if(!board[id]){
            board[id] = currentPlayer;
            e.target.innerText = currentPlayer;
            
          if(winStates(currentPlayer) === true){
            window.alert(`${currentPlayer} wins!`)
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


    const resetBtn = document.getElementById("restart");
    
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


 // {0,1,2}{0,3,6}{0,4,8}{2,4,6}{2,5,8}{6,7,8}
    const winStates = (move) => {
        if(board.includes(null)){
            if(board[0] === move){
                if(board[1] === move && board[2] === move){
                    console.log(`${currentPlayer} wins horizontally`)
                    return true
                    
                }
            }

            if(board[0] === move){
                if(board[3] === move && board[6]=== move){
                    console.log(`${currentPlayer} wins vertically`)

                    return true
                }
            }

            if(board[0] === move){
                if(board[4] === move && board[8]=== move){
                    console.log(`${currentPlayer} wins diagonally`)
                    return true
                }
            }

            if(board[1] === move){
                if (board[4] === move && board[7] === move){
                    console.log(`${currentPlayer} wins vertically`)
                    return true
                }
            }

            if(board[2] === move){
                if(board[4] === move && board[6] === move){
                    console.log(`${currentPlayer} wins diagonally`)
                    return true
                }
            }

            if(board[2] === move){
                if(board[5] === move && board[8]=== move){
                    console.log(`${currentPlayer} wins vertically`)
                    return true
                }
            }

            if(board[3] === move){
                if(board[4] === move && board[5]=== move){
                    console.log(`${currentPlayer} wins vertically`)
                    return true
                }
            }

            if(board[6] === move){
                if(board[7] === move && board[8]=== move){
                    console.log(`${currentPlayer} wins horizontally`)
                    return true
                }
            }
        }else{
            console.log("draw")
            window.alert("draw")
        }


        
    
    }

    
}


drawBoard();