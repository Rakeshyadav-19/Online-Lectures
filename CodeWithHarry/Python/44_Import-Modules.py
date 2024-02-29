# Importing in Python is the process of loading code from a Python module into the current script
import math

result = math.sqrt(9)
print(result)  # Output: 3.0


# You can also import specific functions or variables from a module using the from keyword.
# We can directly use that function without having to use math.function
from math import sqrt

result = sqrt(64)
print(result)  # Output: 3.0


# You can also import multiple functions or variables at once by separating them with a comma:
from math import sqrt, pi

result = sqrt(81)
print(result)  # Output: 3.0
print(pi)  # Output: 3.141592653589793


# to import all functions and variables from a module using the * wildcard
'''from math import *'''


# Python also allows you to rename imported modules using the as keyword.
import pandas as pd
print(pd.__version__)


# to view the names of all the functions and variables defined in a module.
print(dir(math))



"""Creaating oue own module"""
import joker as jk

jk.welcome()
print(jk.comment)