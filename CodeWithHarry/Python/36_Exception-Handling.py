# try….. except blocks are used in python to handle errors and exceptions. The code in try block runs when there is no error. If the try block catches the error, then the except block is executed.

''' SYNTAX -
try:
     #statements which could generate 
     #exception
except:
     #Soloution of generated exception
'''

try:
    num = int(input("Enter an integer: "))
except ValueError:
    print("Number entered is not an integer.")


a = input("Enter the number: ")
print(f"Multiplication table of {a} is: ")
try:
  for i in range(1, 11):
    print(f"{int(a)} X {i} = {int(a)*i}")
except Exception as store: #Stores the error in the variable store(can be anything)
  print(store)  


try:
    num = int(input("Enter an integer: "))
    a = [6, 3]
    print(a[num])
except ValueError:
    print("Number entered is not an integer.")    
except IndexError:
  print("Index Error")
except:
   print("Some other error")


# To give custom error mssg
try:
    raise ValueError("This is a custom error message.")
except ValueError as e:
    print("An error occurred:", str(e))