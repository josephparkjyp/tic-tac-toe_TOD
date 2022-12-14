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
    this.grid = [[null, null, null],
                 [null, null, null], 
                 [null, null, null]
                ]

    // Create players.
    this.player1 = new Player(player1, player1Symbol)
    this.player2 = new Player(player2, player2Symbol())

    // Keeping track of who's turn it is as well as turn number.
    this.currentPlayer = this.player1
    this.turn = 1

    function currentPlayerSymbol() {
        if (this.turn % 2 == 1) {
            return this.player1.symbol    
        } else if (this.turn % 2 == 0) {
            return this.player2.symbol
        }
    }
    function playRound(row, column) {
        if (this.grid[row][column] !== Null) {
            return 'Invalid Move. Try again.'
        } else {
            this.grid[row][column] = currentPlayerSymbol()
            this.turn += 1
        }
    }

    // Function to switch the status every move as well as increment turns total.
    function playTurn() {
        return Null
    }
}

