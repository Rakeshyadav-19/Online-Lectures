#List sort method
colors = ["voilet", "indigo", "blue", "green"]
num = [4,2,5,3,6,1,2,1,2,8,9,7]
'''------------------------------------**************************-------------------------------------------'''


# sorts the list in ascending order
print("sorts the list in ascending order")
colors.sort()
print(colors)

num.sort()
print(num)

# list in descending order
print("sorts the list in descending order")
colors.sort(reverse=True)
print(colors)

num.sort(reverse=True)
print(num)
print("\n")
'''------------------------------------**************************-------------------------------------------'''


# reverses the order of the list.
colors.reverse()
print(colors)

num.reverse()
print(num)
print("\n")
'''------------------------------------**************************-------------------------------------------'''


# returns the index of the first occurrence of the list item.
print(colors.index("green"))

print(num.index(3))
print("\n")
'''------------------------------------**************************-------------------------------------------'''


# Returns the count of the number of items with the given value.
print(colors.count("green"))

print(num.count(1))
print("\n")
'''------------------------------------**************************-------------------------------------------'''


# Returns copy of the list.
'''
if we did 
newlist = colors
i will create newlist as a reference to colors,
if we edit newlist it edits colors also
'''
newlist = colors.copy()
print(colors)
print(newlist)
print("\n")
'''------------------------------------**************************-------------------------------------------'''


# This method appends items to the end of the existing list.
colors.append("pink")
print(colors)
print("\n")
'''------------------------------------**************************-------------------------------------------'''


# method inserts an item at the given index
print("\n\n")
colors = ["voilet", "indigo", "blue", "green", "pink"]
#           [0]        [1]      [2]     [3]      [4]
colors.insert(5, "black")   #inserts item at index 1
# updated list: colors = ["voilet", "indigo", "blue", "green", "pink", "black"]
#       indexs              [0]        [1]      [2]     [3]      [4]      [5]
print(colors)
print("\n")
'''------------------------------------**************************-------------------------------------------'''


# This method adds an entire list or any other collection datatype (set, tuple, dictionary) to the existing list.
#add a list to a list
rainbow = ["green", "yellow", "orange", "red"]
colors.extend(rainbow)
print(colors)
print("\n")
'''------------------------------------**************************-------------------------------------------'''

#Extend method edits the orginal list, if we want to keep main list as it is, use concatinate


# concatenate two lists to join two lists.
colors1 = ["voilet", "indigo", "blue", "green"]
colors2 = ["yellow", "orange", "red"]
print(colors1 + colors2)
print("\n")
'''------------------------------------**************************-------------------------------------------'''
