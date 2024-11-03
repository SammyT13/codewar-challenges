# Detect Pangram

# A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

# Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

def pangram?(string)
    # creates an array of alphabets a - z
    # checks if all the characters in the string are all in the alphabet
    # returns true or false
    ("a".."z").all? { |char| string.downcase.include? char }
end

p pangram?("The quick brown fox jumps over the lazy dog.") #=> true
p pangram?("This is not a pangram.") #=> false