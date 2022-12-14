function Player(name, symbol) {
    this.name = name
    this.symbol = symbol
}

// Takes in names of P1, P2, and P1's symbol (X or O)
function Game(player1, player2, player1Symbol) {
    
    // Determine player 2's symbol.
    function player2Symbol() {
        if (player1Symbol == 'X') {
            return 'O'
        } else {
            return 'X'
        }
    }
    
    // Create the grid.
    this.grid = [[1, 2, 3],
                 [4, 5, 6], 
                 [7, 8, 9]]

    // Create players.
    this.player1 = new Player(player1, player1Symbol)
    this.player2 = new Player(player2, player2Symbol())

    // Keeping track of who's turn it is as well as turn number.
    this.currentPlayer = this.player1
    this.turn = 1

    // Logic for how the round will be played.
    // Basically: if current player is 1/2, play move then switch current player.
    this.playRound = function(row, column) {
        if (this.currentPlayer == this.player1 && this.grid[row][column] != 'X' && this.grid[row][column] != 'O') {
            this.grid[row][column] = this.player1.symbol
            this.potentialWinner = this.player1
            this.currentPlayer = this.player2
            this.turn++
        } else if (this.currentPlayer == this.player2 && this.grid[row][column] != 'X' && this.grid[row][column] != 'O') {
            this.grid[row][column] = this.player2.symbol
            this.potentialWinner = this.player2
            this.currentPlayer = this.player1
            this.turn++
        } else {
            return "Invalid move. Try again."
        }

        // Check if the current board has a win pattern.
        if (checkForWin(this.grid)) {
            console.log(`${this.potentialWinner.name} won the game!`)
        }
        
        console.table(this.grid)
    }

    // Function that checks for a win.
    function checkForWin(board) {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return true;
            }
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return true;
            }
        }

        // Check diagonals
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return true;
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return true;
        }

        // No win
        return false;
    }






}





const game = new Game('Joseph', 'Kimberly', 'O')