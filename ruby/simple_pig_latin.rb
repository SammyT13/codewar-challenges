# Simple Pig Latin

# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !

def pig_it text
  pig_phrase = (text.split.map do |word|
    if !word.match(/[[:punct:]]/)
      word.slice(1..-1).concat(word.slice(0)).concat("ay")
    else
      word
    end
  end).join(" ")
  p pig_phrase

 # alternative method below, but don't understand
  # need to research more
 # puts text.gsub(/(\w)(\w+)*/) { "#{$2}#{$1}ay"} 

 # alternative
  # makes more sense
 # text.split.map{|word| word =~ /\w/ ? "#{word[1..-1]}#{word[0]}ay" : word}.join(" ")
end


pig_it("Pig latin is cool")
pig_it("Hello world !")