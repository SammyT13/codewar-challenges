def paperwork(n, m)
    n < 0 || m < 0 ? 0 : n * m
end

# Alternative Method
    # This uses the positive method and negative method can be used as well
# def paperwork(n, m)
#     n.positive? && m.positive? ? n * m : 0
# end

p paperwork(5, 5)
p paperwork(5, -5)
p paperwork(-5, -5)
p paperwork(-5, 5)
p paperwork(5, 0)
