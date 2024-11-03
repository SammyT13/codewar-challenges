# Calculate Average

# Write a function which calculates the average of the numbers in a given array.

# Note: Empty arrays should return 0.

def average(array)
    return array.empty? ? 0 : (array.sum.to_f / array.size)
    
    # same as above
    # if array.empty?
    #     return 0
    # else
    #     return (array.sum.to_f / array.size)
    # end
end

p average([1, 3])
p average([1, 2, -3])
p average([0, 1])
p average([])