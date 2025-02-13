#The conversion of one dataType in another dataType type

num = "1"
num1 = "2"

print(num + num1)
#First coverts string into int 
print(int(num)+int(num1))

'''
Types of casting:
I] Explicit - Done by programmer by own choice
II] Implicit - Python itself coverts the lower dataType according to the heigher order 
'''

#Implicit
num2 = 1.1
num3 = 2
print(num2 + num3)
print(type(num2))
print(type(num3))
print(type(num2+num3))
