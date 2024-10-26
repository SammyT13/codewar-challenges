# Descending Order

# Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

# Examples:
# Input: 42145 Output: 54421

# Input: 145263 Output: 654321

# Input: 123456789 Output: 987654321

def descending_order(n)
    if n <= 9
        return n
    else
        return n.to_s.split("").sort.reverse.join.to_i
    end
    # Alternative: instead of using if/else 
    # n.digits.sort.reverse.join.to_i
end

puts descending_order(42145)
puts descending_order(123456789)
puts descending_order(0)
puts descending_order(1)
puts descending_order(10)