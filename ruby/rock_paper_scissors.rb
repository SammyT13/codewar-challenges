# Rock Paper Scissors!
# Rock Paper Scissors
# Let's play! You have to return which player won! In case of a draw return Draw!.

# Examples(Input1, Input2 --> Output):

# "scissors", "paper" --> "Player 1 won!"
# "scissors", "rock" --> "Player 2 won!"
# "paper", "paper" --> "Draw!"

def rps(p1, p2)
    winner = p1 == p2 ? "Draw!" : p1 == "scissors" && p2 == "paper" || p1 == "paper" && p2 == "rock" || p1 == "rock" && p2 == "scissors" ? "Player 1 won!" : "Player 2 won!"
end


# Alternative Example

def rps_alt(p1, p2)
    # Creates a hash showing the key is the winner and the value is the loser
    winning_move = {"scissors" => "paper", "paper" => "rock", "rock" => "scissors"}

    # This determines if p1 & p2 selected the same rps
    # if p1 chooses scissors, paper, or rock (key) and it equals p2 selections (value) then p1 wins
    winner = p1 == p2 ? "Draw!" : winning_move[p1] == p2 ? "Player 1 won!" : "Player 2 won!"
end