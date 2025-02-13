# If ... Else in One Line

a = 2
b = 330
print("A") if a > b else print("B")

a = 330
b = 330
# if a> b print A, else if a == b print b, else print b
print("A") if a > b else print("=") if a == b else print("B")

# prints nothing if goes to else, else is important
c = 9 if a>b else ""
print(c)