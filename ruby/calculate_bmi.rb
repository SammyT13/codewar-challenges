# Calculate BMI

# Write function bmi that calculates body mass index (bmi = weight / height2).

# if bmi <= 18.5 return "Underweight"

# if bmi <= 25.0 return "Normal"

# if bmi <= 30.0 return "Overweight"

# if bmi > 30 return "Obese"

def bmi(weight, height)
  bmi = weight / (height)**2

  case 
  when bmi <= 18.5 then p "Underweight"
  when bmi <= 25.0 then p "Normal"
  when bmi <= 30.0 then p "Overweight"
  when bmi > 30 then p "Obese"
  end
end

bmi(50, 1.8)