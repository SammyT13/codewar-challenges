# Is this a triangle?

# Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

# (In this case, all triangles must have surface greater than 0 to be accepted).

# Examples:

# Input -> Output
# 1,2,2 -> true
# 4,2,3 -> true
# 2,2,2 -> true
# 1,2,3 -> false
# -5,1,3 -> false
# 0,2,3 -> false
# 1,2,9 -> false 

def is_triangle(a, b, c)
  ab = a + b # > c
  ac = a + c # > b
  bc = b + c # > a
  
  triangle = ab > c && ac > b && bc > a ? true : false
end

p is_triangle(1, 2, 2) #=> true
p is_triangle(4, 2, 3) #=> true
p is_triangle(2, 2, 2) #=> true
p is_triangle(1, 2, 3) #=> false
p is_triangle(-5, 1, 3) #=> false
p is_triangle(0, 2, 3) #=> false
p is_triangle(1, 2, 9) #=> false

# Alternative: this method is determines if three integers can form a triangle if two of the shortest side is greater than the longest side

def is_triangle_a(a, b, c)
  a, b, c = [a, b, c].sort
  a + b > c
end

p is_triangle_a(1, 2, 2) #=> true
p is_triangle_a(4, 2, 3) #=> true
p is_triangle_a(2, 2, 2) #=> true
p is_triangle_a(1, 2, 3) #=> false
p is_triangle_a(-5, 1, 3) #=> false
p is_triangle_a(0, 2, 3) #=> false
p is_triangle_a(1, 2, 9) #=> false