# Grasshopper-Messi goals function

# Messi goals function
# Messi is a soccer player with goals in three leagues:

# LaLiga
# Copa del Rey
# Champions
# Complete the function to return his total number of goals in all three leagues.

# Note: the input will always be valid.

# For example:

# 5, 10, 2  -->  17

# def goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals)
#   laLigaGoals + copaDelReyGoals + championsLeagueGoals
# end

# p goals(0, 0, 0)
# p goals(43, 10, 5)

# Alternative: using spread operator '*'
def goals(*goal)
  goal.reduce(:+)
end

p goals(0, 0, 0)
p goals(43, 10, 5)

