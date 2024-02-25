#Simple whiel loop
i = 0
while (i < 11):
    print(i)
    i += 1

#Another eg of while
num = int(input("Enter a number: "))
while (num <= 999):
    num = int(input("Enter a number again: "))
    print(num)
#We can also use else statement, when while loop is finished executing the else is executed
else:
    print("While loop finished")

#To emulate Do-While loop in python
while True:
    mun = int(input("Enter a positive number"))
    print(mun)

    if not mun>0:
        print("You entered a nigative number")
        break