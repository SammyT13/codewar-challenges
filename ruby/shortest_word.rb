# Shortest Word

# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.

def find_short(s)
  s.split(" ").map { |word| word.length }.min()
end


puts find_short("bitcoin take over the world maybe who knows perhaps")