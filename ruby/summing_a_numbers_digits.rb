# Summing a Number's Digits

# Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

# For example: (Input --> Output)

# 10 --> 1
# 99 --> 18
# -32 --> 5
# Let's assume that all numbers in the input will be integer values.

def sum_digits number
  sum = 0
  (number).abs.to_s.chars.map do |digit|
    sum += digit.to_i
  end
  return sum 
end

# One Liner

# def sum_digits number
#   # set number to absolute value
#   # conver number to string
#   # return an array of string
#   # iterate through array and change to int
#   # reduce method to sumb array
#   (number).abs.to_s.chars.map(&:to_i).reduce(:+)
# end

puts sum_digits(-23)