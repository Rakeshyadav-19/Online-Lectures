#Conditional Operators
# <, <=, >, >=, ==, !=

#The simple If Else
age = int(input("Enter your age: "))
print("Your age is:", age)

if(age>18):
    print("You can drive")
else:
    print("You cannot dirve")

#The elif
num = int(input("Enter a numer: "))
if(num > 0):
    print("You entered a +ve number")
elif(num < 0):
    print("You entered a -ve number")
else:
    print("You entered a 0")

#The nested if else
nm = int(input("Requires a number: "))

if(nm < 100):
    print("number is less than 100 ")
    if(nm < 50):
        print("It is between 0-50")
    else:
        print("It is between 50-99")
else:
    print("The number is greater than 100")