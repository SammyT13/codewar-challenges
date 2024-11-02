# Break camelCase

# Complete the solution so that the function will break up camel casing, using a space between words.

# Example
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""

def solution(string)
    new_str = ""
    #  splits string to an array and iterates array
    string.split("").each do | ch |
        # if character is uppercase we add a space plus the character
        if (ch == ch.upcase)
            new_str += " " + ch
        else # else return the character
            new_str += ch
        end
    end
    # returns new string breaking up camel case
    new_str

    # Alternative method: using gsub and regex
        # checks for uppercase letter and adds space on each instance
        # for regex could use /([A-Z])/, ' \1'
    # string.gsub /([[:upper:]])/, ' \1'
end


puts solution("identifier")
puts solution("camelCase")