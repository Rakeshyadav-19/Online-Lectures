# Unoredered collection
# Sets are imutable
#It cannot have repeated value

#Even if we put repeated values it does not take and nor print them
s = {2, 4, 2, 6}
print(s)

info = {"Carla", 19, False, 5.9, 19}
print(info)

#  set values cannot be accessed using index numbers
# Accessing set values using for loop:
for item in info:
    print(item)


set1 = set()
print(type(set1))