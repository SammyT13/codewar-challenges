# def are_you_playing_banjo(name)
#     r = name[0].downcase
#     r == "r" ? "#{name} plays banjo" : "#{name} does not play banjo"
# end

# Alternative Method

#   def are_you_playing_banjo(name)
#     r = name[0].downcase
    
#     if r == 'r'
#       "#{name} plays banjo"
#       else
#       "#{name} does not play banjo"
#       end
#   end

# Alternative Method
    # You can chain the downcase or upcase method after name and use one letter to compare

def are_you_playing_banjo(name)
    name.start_with?("r", "R") ? "#{name} plays banjo" : "#{name} does not play banjo"
end

p are_you_playing_banjo("Ricky")
p are_you_playing_banjo("Eric")