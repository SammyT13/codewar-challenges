def is_anagram(test,original)
  return test.downcase.split(//).sort.join == original.downcase.split(//).sort.join
end




p is_anagram("foefet", "toffee")