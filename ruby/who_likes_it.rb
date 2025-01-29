# Who likes it?

# You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

# Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

# []                                -->  "no one likes this"
# ["Peter"]                         -->  "Peter likes this"
# ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
# ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
# ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
# Note: For 4 or more names, the number in "and 2 others" simply increases.

def likes(names)
  arr_length = names.length

  case arr_length
  when 0
    p "no one likes this"
  when 1
    p "#{names[0]} likes this"
  when 2
    p "#{names[0]} and #{names[1]} like this"
  when 3
    p "#{names[0]}, #{names[1]}, and #{names[2]} like this"
  else
    p "#{names[0]}, #{names[1]} and #{arr_length - 2} others like this"
  end

end

likes([])
likes(["Peter"])
likes(["Jacob", "Alex"])
likes(["Max", "Jacob", "Mark", "Max"])
likes(["Alex", "Jacob", "Mark", "Max"])
likes(["Alex", "Jacob", "Mark", "Max", "Sam"])