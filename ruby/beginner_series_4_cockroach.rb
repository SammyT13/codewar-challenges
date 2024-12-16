# Beginner Series #4 Cockroach

# The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

# For example:

# 1.08 --> 30
# Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

def cockroach_speed(s)
  # formula: km/h / 0.036
  (s / 0.036).floor
end

# Alternative

# def cockroach_speed(s)
#   # km to cm conversion
#   cm_per_km = 1000 * 100
#   # seconds in an hour
#   sec_per_hour = 60 * 60
#   # formula: (k/h * c/km) / s/h
#   cm_per_sec = (s * cm_per_km / sec_per_hour).floor
# end