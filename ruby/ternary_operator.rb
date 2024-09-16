def sale_hotdogs(n)
    price = n < 5 ? n * 100 : n.between?(5, 10) ? n * 95 : n * 90
end
