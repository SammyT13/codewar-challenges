# Mumbling

# This time no story, no theory. The examples below show you how to write function accum:

# Examples:
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which includes only letters from a..z and A..Z.

def accum(s)
  # creates an array of the string
  array_of_string = s.chars

  # used map with index method to iterate through array_of_string
    # char is the character of each letter in the array
    # i is the index
    # upcase the begining letter only
    # concat second letter based on i (index) since each index counted how many times a letter is to be printed
  new_string = array_of_string.map.with_index do |char, i|
    char.upcase + char.downcase * i 
  end

  # joined array with "-"
  new_string.join("-")
end

## Alternative One Line code

# def accum(s)
#   s.chars.map.with_index { |char, i| char.upcase + char * i }.join("-")
# end

## Alternative One Line Code

# def accum(s)
#   s.chars.map.with_index(1) { |char, i| (char * i).capitalize}.join("-")
# end

puts accum("abcd")
puts accum("RqaEzty")