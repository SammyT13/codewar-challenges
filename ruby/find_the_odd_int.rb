# Find the Odd Int

# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

# Examples
# [7] should return 7, because it occurs 1 time (which is odd).
# [0] should return 0, because it occurs 1 time (which is odd).
# [1,1,2] should return 2, because it occurs 1 time (which is odd).
# [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
# [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

def find_it(seq)
    # tally each number and creates hash with the number as k and count as value
    tally = seq.reduce(Hash.new(0)) do |result, count|
        result[count] += 1
        result 
    end

    # determines which count was odd
    odd_num = tally.each do |k, v|
        return k if v.odd?
    end
end

# Alternative method

# def find_it(seq)
#     seq.find { |c| seq.count(c).odd? }
# end

find_it([1,2,2,3,3,3,4,3,3,3,2,2,1])
find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
find_it([7])
find_it([0])
find_it([1, 1, 2])