def check_for_factor(base, factor)
    if base % factor == 0
        true
    else
        false
    end
end


p check_for_factor(10, 2)
p check_for_factor(63, 7)
p check_for_factor(9, 2)