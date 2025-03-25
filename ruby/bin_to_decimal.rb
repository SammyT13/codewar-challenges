# Bin to Decimal

# Complete the function which converts a binary number (given as a string) to a decimal number.

def bin_to_dec str
  decimal = 0

  # binary to decimal
    # multiply each digit starting  from the rightmost (LSB) digit by the powers of 2 starting with 2^0 and increase the exponent by 1 as you move to the leftmost (MSB) digit
    # then sum each value
  
  # used above algorithm but reverse the string so the left most digit becomes my right most digit
    # this allows for me to use the index as my exponent starting with 0 then increasing by 1 as I iterate 
  # afterwards sum the value 

  str.reverse.split("").each_with_index do | v, i |
    decimal += v.to_i * (2**i)
  end
  return decimal
end

bin_to_decimal("101101")