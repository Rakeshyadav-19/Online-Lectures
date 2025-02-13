'''
Python decorators are a powerful and versatile tool that allow you to modify the behavior of functions and methods. They are a way to extend the functionality of a function or method without modifying its source code.

A decorator is a function that takes another function as an argument and returns a new function that modifies the behavior of the original function. The new function is often referred to as a "decorated" function. 
'''

# SYNTAX -
# @decorator_function
# def my_function():
#     pass

# The @decorator_function notation is just a shorthand for
# def my_function():
#     pass



# my_function = decorator_function(my_function)

# Decorators are often used to add functionality to functions and methods, such as logging, memoization, and access control.


# One common use of decorators is to add logging to a function

import logging

def log_function_call(func):
    def decorated(*args, **kwargs): #you could use a decorator to log the arguments and return value of a function each time it is called
        logging.info(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        logging.info(f"{func.__name__} returned {result}")
        return result
    return decorated

@log_function_call # log_function_call decorator takes a function as an argument and returns a new function that logs the function call before and after the original function is called.
def my_function(a, b):
    return a + b


'''
 python decorators are a way to extend the functionality of functions and methods, by modifying its behavior without modifying the source code. 
'''

#E.G -
def greet(fx):
  def mfx(*args, **kwargs): #When We have to pass arguments *-Tuple, **-Dict
    print("Good Morning")
    fx(*args, **kwargs)
    print("Thanks for using this function")
  return mfx

@greet
def hello():
  print("Hello world")

@greet
def add(a, b):
  print(a+b)
  
# greet(hello)()  //Do this or write @greet(E.X) above the fucntion tha isa to be decorated
hello()
# greet(add)(1, 2)
add(1, 2)