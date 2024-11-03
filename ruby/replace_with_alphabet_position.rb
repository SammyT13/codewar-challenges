# Replace With Alphabet Position

# Welcome.

# In this kata you are required to, given a string, replace every letter with its position in the alphabet.

# If anything in the text isn't a letter, ignore it and don't return it.

# "a" = 1, "b" = 2, etc.

# Example
# Input = "The sunset sets at twelve o' clock."
# Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

def alphabet_position(text)
    # creates a hash of the alphabet
    alphabet = ("a".."z").each.with_index(1).to_h
    # empty array
    position = [] 

    # creates an array of string and downcase
    #     iterates through string of array
    text.downcase.split("").each do | val |
        # iterates through has
        alphabet.map do |k, v|
            # deterimines which character matches key
            if k.include? val
                position << v # inserts value into erray
            end
        end
    end
    position.join(" ") # joins array to string of numbers
end

p alphabet_position("The sunset sets at twelve o' clock.")