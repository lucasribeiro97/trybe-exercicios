def bigger_number(n1, n2):
    if n1 > n2:
        return n1
    else:
        return n2


def aritmetic_medium(list_numbers):
    sum = 0
    for number in list_numbers:
        sum += number
    return sum / len(list_numbers)


def asteristicos(n):
    for i in range(n):
        print("*" * n)


def bigger_name(list_names):
    bigger_name = ""
    for name in list_names:
        if len(name) > len(bigger_name):
            bigger_name = name
    return bigger_name


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters / 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


def type_of_triangle(a, b, c):
    is_triangle = a + b > c and a + c > b and b + c > a
    if not is_triangle:
        return "Não é um triângulo"
    if a == b == c:
        return "Equilátero"
    elif a == b or b == c or a == c:
        return "Isósceles"
    else:
        return "Escaleno"


print(type_of_triangle(3, 2, 2))
print(paint_costs(100))
print(bigger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
print(asteristicos(5))
print(aritmetic_medium([1, 2, 3, 4, 5]))
print(bigger_number(5, 10))
