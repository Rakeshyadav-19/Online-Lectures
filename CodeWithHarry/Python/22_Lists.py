#List
#List are mutable
lst1 = [1,2,2,3,5,4,6]
lst2 = ["Red", "Green", "Blue"]
details = ["Abhijeet", 18, "FYBScIT", 9.8]
print(lst1)
print(lst2)
print(details)
print("\n")
'''------------------------------------**************************-------------------------------------------'''

#Accesing items of list

# I] Positive Indexing
print("Positive Indexing: ")
colors = ["Red", "Green", "Blue", "Yellow", "Green"]
#          [0]      [1]     [2]      [3]      [4]
print(colors[2])
print(colors[4])
print(colors[0])

# II] Negative Indexing
print("Negative Indexing: ")
colors = ["Red", "Green", "Blue", "Yellow", "Green"]
#          [-5]    [-4]    [-3]     [-2]      [-1]
#To calculate negative to positive
print(colors[-1]) # [len(color)-1] => [5-1] => 4
print(colors[-3])
print(colors[-5])
print("\n")
'''------------------------------------**************************-------------------------------------------'''


#Checking if item is present in list or not
colors = ["Red", "Green", "Blue", "Yellow", "Green"]
if "Yellow" in colors: #We use in keyword for this
    print("Yellow is present.")
else:
    print("Yellow is absent.")
print("\n")
'''------------------------------------**************************-------------------------------------------'''


#Print list in between that range(Range in lists)
''' SYNTAX - listName[start : end : jumpIndex]'''

animals = ["cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow"]
#           [0]     [1]   [2]     [3]     [4]     [5]      [6]       [7]     [8]
#          [-9]    [-8]  [-7]    [-6]    [-5]    [-4]     [-3]      [-2]    [-1]
print("Print list in between that range")
print(animals[3:7])	#using positive indexes
print(animals[-7:-2])	#using negative indexes

# printing all element from a given index till the end
animals = ["cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow"]
print("printing all element from a given index till the end")
print(animals[4:])	#using positive indexes
print(animals[-4:])	#using negative indexes

#  printing all elements from start to a given index
animals = ["cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow"]
print(" printing all elements from start to a given index")
print(animals[:6])	#using positive indexes
print(animals[:-3])	#using negative indexes

# Printing alternate values
animals = ["cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow"]
print("Printing alternate values")
print(animals[::2])		#using positive indexes
print(animals[-8:-1:2])	#using negative indexes

# printing every 3rd consecutive value withing a given range
animals = ["cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow"]
print("printing every 3rd consecutive value withing a given range")
print(animals[1:8:3])
print("\n")
'''------------------------------------**************************-------------------------------------------'''

#WE can ferform it on string as well
if "ke" in "Rakesh":
    print("yes")
print("\n")
'''------------------------------------**************************-------------------------------------------'''


# List Comprehension
# creating new lists from other iterables like lists, tuples, dictionaries, sets, and even in arrays and strings

'''SYNTAX - List = [Expression(item) | for item in iterable | if Condition]'''
names = ["Milo", "Sarah", "Bruno", "Anastasia", "Rosa"]
namesWith_O = [item for item in names if "o" in item]
print(namesWith_O)

# Accepts items which have more than 4 letters
names = ["Milo", "Sarah", "Bruno", "Anastasia", "Rosa"]
namesWith_O = [item for item in names if (len(item) > 4)]
print(namesWith_O)

#List of squares from 0 to 9
lst = [i*i for i in range(10)]
print(lst)

#List of squares of even numbers from 0-9
lst = [i*i for i in range(10) if i%2==0]
print(lst)