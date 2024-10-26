# Reverse Words

# omplete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

# Examples
# "This is an example!" ==> "sihT si na !elpmaxe"
# "double  spaces"      ==> "elbuod  secaps"

def reverse_words(str)
    # used / / in split method to keep double spaces
    str.split(/ /).map { |word| word.reverse }.join(" ")

    # Alternative: Can use ampersand to pass the given method
    # str.split(/ /).map(&:reverse).join(" ")
end

puts reverse_words("This is an example!")
puts reverse_words("double  spaces")