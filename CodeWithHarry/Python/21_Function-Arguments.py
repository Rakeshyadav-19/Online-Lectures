'''
Their are 4 types of arguments we can pass to function
I] Default arguments
II] Keyword arguments
III] Variable Length arguments
IV] Required arguments
'''

#Required arguments
def avg(a, b):
    print("THe average of two number is", (a+b)/2)
avg(4, 6)
'''------------------------------------**************************-------------------------------------------'''


#Default arguments
def sum(x = 3, y = 2):
    print("Sume of two numbers is ", (x+y))
sum()
sum(4,6)   #When we pass arguments it akes these values
sum(4)     #When we pass one vaue it goes as 1st argument
sum(y = 3) #TO pass a specific argumenst value
'''------------------------------------**************************-------------------------------------------'''


#Keyword arguments
def name(fname, mname, lname):
    print("Welcome!", fname, mname, lname)
name(mname = "Rax", fname = "Raj", lname = "Kitagwa")

#When we want to pass more arguments than defined in function
#Their are two types

# I] Arbitary argumenrs
def addition(*numbers): #* at start create it as a tuple
    sum = 0
    for i in numbers:
        sum = sum + i
    print("Sum is",sum)
addition(1,2,3,4,5,6,7,8,9)
# II] Keyword Arbitrary Arguments
def names(**name1): # ** at start create it as dictionary
    print("hello", name1["fname"],name1["lname"])
names(fname = "Rax", lname = "Raj")
'''------------------------------------**************************-------------------------------------------'''


#Return statement
def add(*nums):
    add = 0
    for j in nums:
        add = add + j
    return add

s = add(1,2,3,4,5,6,7,8,9)
print(s)