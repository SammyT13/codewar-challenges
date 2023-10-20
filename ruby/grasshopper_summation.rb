def summation(num)
    sum = 0
    
    (1..num).each do |value|
        sum += value
    end
    return sum
end

p summation(2)
p summation(8)

# Alternative Method to Sum
# def summation(num)
#     (1..num).sum
# end

#Alternative Method to Summmation of an Integer
    # This method uses the Sum of Integers Formula
    # S = n(a + 1) / 2
# def summation(num)
#     num * (num + 1) / 2
# end