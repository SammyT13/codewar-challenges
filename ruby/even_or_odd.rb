# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

def even_or_odd(number)
    return number%2 == 0 ? "Even" : "Odd"
end

# Alternative Methods
    # Also I could use number.even instead of odd
# def even_or_odd(number)
#     number.odd? ? "Odd" : "Even"
# end

p even_or_odd(3)
p even_or_odd(8)