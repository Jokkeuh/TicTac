// TicTacToe







const drawBoard = () => {

    let board = [null, null, null, null, null, null, null, null, null]


    const playerOne= "O";
    const playerTwo = "X";
    let currentPlayer = playerOne;

    function __squareClicked(e) {
        const id = e.target.id;
        console.log(id);
        if(!board[id]){
            board[id] = currentPlayer;
            e.target.innerText = currentPlayer;
            
           winStates(currentPlayer)
           


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
        board.forEach((n ,i) => {
            board[i] = null;
            console.log(resetBtn + "clicked")
        });
        squares.forEach((square) => {
            square.innerText ="";
        })
        currentPlayer = playerOne;
    }
    
    resetBtn.addEventListener("click", __resetScreen);


 // {0,1,2}{0,3,6}{0,4,8}{2,4,6}{2,5,8}{6,7,8}
    const winStates = (move) => {
        
        if(board[0] === move){
            if(board[1] === move && board[2] === move){
                console.log(`${currentPlayer} wins horizontally`)
                
            }
        }

        if(board[0] === move){
            if(board[3] === move && board[6]=== move){
                console.log(`${currentPlayer} wins vertically`)
            }
        }

        if(board[0] === move){
            if(board[4] === move && board[8]=== move){
                console.log(`${currentPlayer} wins diagonally`)
            }
        }

        if(board[1] === move){
            if (board[4] === move && board[7] === move){
                console.log(`${currentPlayer} wins vertically`)
            }
        }

        if(board[2] === move){
            if(board[4] === move && board[6] === move){
                console.log(`${currentPlayer} wins diagonally`)
            }
        }

        if(board[2] === move){
            if(board[5] === move && board[8]=== move){
                console.log(`${currentPlayer} wins vertically`)
            }
        }

        if(board[3] === move){
            if(board[4] === move && board[5]=== move){
                console.log(`${currentPlayer} wins vertically`)
            }
        }

        if(board[6] === move){
            if(board[7] === move && board[8]=== move){
                console.log(`${currentPlayer} wins horizontally`)
            }
        }


        
    
    }
}


drawBoard();