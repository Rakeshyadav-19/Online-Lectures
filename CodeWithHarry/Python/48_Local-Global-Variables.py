# Local -  It is created when the function is called and is destroyed when the function returns.

# Global - It is defined outside of a function and is accessible from within any function in your code.

x = 10 # global variable

def x_function():
  y = 5 # local variable
  print(y)

x_function()
print(x)
'''print(y)''' # this will cause an error because y is a local variable and is not accessible outside of the function


# if we want to modify a global variable from within a function, global keyword is used to declare that a variable is a global variable and should be accessed from the global scope

x = 10 # global variable

def y_function():
  global x
  x = 5 # this will change the value of the global variable x
  y = 5 # local variable

y_function()
print(x) # prints 5
'''print(y)''' # this will cause an error because y is a local variable and is not accessible outside of the function


# 
r = 29
def roll():
  r = 27
  print(f"The local variable is {r}")
roll()
print(f"The global variable is {r}")
