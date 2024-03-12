# The is operator compares the identity of two objects, while the == operator compares the values of the objects.
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)  # True
print(a is b)  # False
print("\n")


# in Python, strings and integers are immutable, which means that once they are created, their value cannot be changed. This means that, for strings and integers, is and == will always return the same result
a = "hello"
b = "hello"
print(a == b)  # True
print(a is b)  # True
a = 5
b = 5
print(a == b)  # True
print(a is b)  # True
print("\n")


"""use == when you want to compare the values of two objects, and use is when you want to check if two objects are the same object in memory."""


a = None
b = None
print(a is b) # exact location of object in memory
print(a is None) # exact location of object in memory
print(a == b) # value
print("\n")


a = 4
b = "4"
c = "6"
d = "6"
print(a is b)
print(a == b)
print(b == c)
print(c == d)