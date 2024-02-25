def vertical_inverted_ladder(name):
    for remove_letter in range(len(name)):
        for index in range(len(name) - remove_letter):
            print(name[index], end="")
        print()


if __name__ == "__main__":
    name = input("Enter your name: ")
    vertical_inverted_ladder(name)
