# String Ends With?

#Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

def solution(str, ending)
 result = str.end_with?(ending)
end

## Alternative solutions:

# def solution(str, ending)
#   # -ending.length as the first argument in the slice method provides a negative length of the ending string, when you have a negative number at the begining of the slice method this means it starts to count from the end of the string
#   # the second argument is so we cut the string at the appropriate length
#   result = str.slice(-ending.length,ending.length) == ending
#   puts result
# end

#Examples:

puts solution('abc', 'bc') # returns true
puts solution('abc', 'd') # returns false
puts solution('abcde', '') # returns true