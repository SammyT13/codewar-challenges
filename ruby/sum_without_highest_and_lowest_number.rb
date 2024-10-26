# Sum without Highest and Lowest Number

# Task
# Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

# The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

# Mind the input validation.

# Example
# { 6, 2, 1, 8, 10 } => 16
# { 1, 1, 11, 2, 3 } => 6
# Input validation
# If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

def sum_array(arr)
    empty_value = arr.nil? || arr.empty? || arr.length == 1
    if empty_value
        return 0
    else
        return arr.reduce(:+) - arr.max - arr.min
        # Alternative: sorts array first, then uses range from index 1 to index 2nd to last, then use reduce method to sum
        # arr.sort[1..-2].reduce(0, :+)
    end
end

puts sum_array([])
puts sum_array(nil)
puts sum_array([0])
puts sum_array([100000000])
puts sum_array([6, 2, 1, 8, 10])
puts sum_array([-6, -20, -1, -10, -12])
puts sum_array([-6, 20, -1, 10, -12])
puts sum_array([-3, -5])