# Ones and Zeros


# Given an array of ones and zeroes, convert the equivalent binary value to an integer.

# Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

# Examples:

# Testing: [0, 0, 0, 1] ==> 1
# Testing: [0, 0, 1, 0] ==> 2
# Testing: [0, 1, 0, 1] ==> 5
# Testing: [1, 0, 0, 1] ==> 9
# Testing: [0, 0, 1, 0] ==> 2
# Testing: [0, 1, 1, 0] ==> 6
# Testing: [1, 1, 1, 1] ==> 15
# Testing: [1, 0, 1, 1] ==> 11
# However, the arrays can have varying lengths, not just limited to 4.

def binary_array_to_number(arr)
    bin_to_int = 0
    # reverse the array because binary is read from right to left
    arr.reverse.each_with_index do |num, i|
        # bit * 2^index and sum total
        bin_to_int += num * (2 ** i)
    end
    
    bin_to_int

    # Alternative: could use the to_i method / use 2 as bit argument
    # arr.join.to_i(2)
end

puts binary_array_to_number([0, 0, 0, 1])
puts binary_array_to_number([0, 0, 1, 0])
puts binary_array_to_number([0, 1, 0, 1])
puts binary_array_to_number([1, 0, 0, 1])
puts binary_array_to_number([0, 1, 1, 0])
puts binary_array_to_number([1, 1, 1, 1])
puts binary_array_to_number([1, 0, 1, 1])
puts binary_array_to_number([1, 0, 0, 1, 0, 1])






