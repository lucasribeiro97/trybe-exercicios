PI = 3.14


def square(side):
    """Calcula a área de um quadrado"""
    return side * side


def rectangle(base, height):
    """Calcula a área de um retângulo"""
    return base * height


def circle(radius):
    """Calcula a área de um círculo"""
    return PI * radius * radius


if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
