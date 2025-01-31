# Count of positives / sum of negatives

# Given an array of integers.

# Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

# If the input is an empty array or is null, return an empty array.

# Example
# For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

def count_positives_sum_negatives(lst)
  if lst.nil? || lst.empty?
    return []
  end

  positive_count = 0
  negative_sum = 0
  
  for i in lst do
    if i > 0
      positive_count += 1
    else
      negative_sum += i
    end
  end
  return [positive_count, negative_sum]
end

p count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) #=> [10, -65]

p count_positives_sum_negatives([])

p count_positives_sum_negatives([1])

p count_positives_sum_negatives([-1])