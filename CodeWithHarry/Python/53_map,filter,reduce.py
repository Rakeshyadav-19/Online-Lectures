# The map function applies a function to each element in a sequence and returns a new sequence containing the transformed elements.
"""SYNTAX -  map(function, iterable)"""
# List of numbers
numbers = [1, 2, 3, 4, 5]
# Double each number using the map function
doubled = map(lambda x: x * 2, numbers)
# Print the doubled numbers
print(list(doubled))
print("\n")


# The filter function filters a sequence of elements based on a given predicate (a function that returns a boolean value) and returns a new sequence containing only the elements that meet the predicate.
"""SYNTAX  -  filter(predicate, iterable)"""
# List of numbers
numbers = [1, 2, 3, 4, 5]
# Get only the even numbers using the filter function
evens = filter(lambda x: x % 2 == 0, numbers)
# Print the even numbers
print(list(evens))
print("\n")


# The reduce function is a higher-order function that applies a function to a sequence and returns a single value
"""STNTAX - reduce(function, iterable)"""
# The function argument is a function that takes in two arguments and returns a single value.
# The reduce function applies the function to the first two elements in the iterable and then applies the function to the result and the next element, and so on.
# List of numbers
from functools import reduce
numbers = [1, 2, 3, 4, 5]
# Calculate the sum of the numbers using the reduce function
sum = reduce(lambda x, y: x + y, numbers)
# Print the sum
print(sum)