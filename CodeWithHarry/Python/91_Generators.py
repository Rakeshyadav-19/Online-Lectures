# Generators in Python are special type of functions that allow you to create an iterable sequence of values. A generator function returns a generator object, which can be used to generate the values one-by-one as you iterate over it.


# Creating a Generator: - using the yield statement in a function.
def my_generator():
    for i in range(5):
        yield i #The yield statement returns a value from the generator and suspends the execution of the function until the next value is requested

gen = my_generator()
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))

# Using a Generator: -  you can use it in a variety of ways, such as in a for loop, a list comprehension, or a generator expression.
gen = my_generator()
for i in gen:
    print(i)