# A lambda function is a small anonymous function without a name.
'''     lambda arguments: expression     ''' 

# Lambda functions are often used in situations where a small function is required for a short period of time.
# Function to double the input
def double(x):
  return x * 2
# Lambda function to double the input
sq = lambda x: x * 2
print(sq(3))
print(double(3))
print("\n")


# lambda function with multiple arguments:
# Function to calculate the product of two numbers
def multiply(x, y):
    return x * y
# Lambda function to calculate the product of two numbers
mul = lambda x, y: x * y
print(mul(4,4))
print(multiply(4,4))
print("\n")


# Lambda functions can also include multiple statements, but they are limited to a single expression.
# Lambda function to calculate the product of two numbers,
# with additional print statement
st = lambda x, y: print(f'{x} * {y} = {x * y}')
print(st(3,2))
print("\n")



# 
def appl(fx, value):
  return 6 + fx(value)

double = lambda x: x * 2
cube = lambda x: x * x * x
avg = lambda x, y, z: (x + y + z) / 3

print(double(5))
print(cube(5))
print(avg(3, 5, 10))
print(appl(lambda x: x * x , 2))
print(appl(double, 2))