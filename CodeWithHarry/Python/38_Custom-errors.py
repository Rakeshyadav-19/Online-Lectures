# we can raise custom errors by using the raise keyword.
# create our own custom exceptions that serve our purpose.

salary = int(input("Enter salary amount: "))
if not 2000 < salary < 5000:
    raise ValueError("Not a valid salary")

# we can define custom exceptions by creating a new class that is derived from the built-in Exception class
''' SYNTAX - 
class CustomError(Exception):
  # code ...
  pass

try:
  # code ...

except CustomError:
  # code...
'''


# modify to except "quit" string
a = int(input("Enter any value between 5 and 9"))
try:
  if(a<5  or a>9):
    raise  ValueError("Value should be between 5 and 9")
except Exception as quit:
  print("fine" , quit)
 