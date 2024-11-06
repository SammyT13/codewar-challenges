def count_chars(s)
  s.split("").reduce(Hash.new(0)) do |result, count|
    result[count] += 1
    result
  end
end

p count_chars("aba")
p count_chars("")