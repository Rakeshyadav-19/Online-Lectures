# To calculate factorial
# factorial(n) = n * factorial(n-1)
def factorial(n):
  if (n == 0 or n == 1):
    return 1
  else:
    return n * factorial(n - 1)
print(factorial(5))

# For fibonaaci series
#f(n) = f(n-1) + f(n-2)
def fibo(n):
    f1 =0
    f2 = 1
    for i in range (1,n+1):
      fn = f1+f2
      f1 =f2
      f2 =fn
    return f2
  
print(fibo(10))