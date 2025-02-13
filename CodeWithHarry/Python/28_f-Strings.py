# String formatting in python

txt = "For only {price:.2f} dollars!"
print(txt.format(price = 49))

# The f-string offers a convenient way to embed Python expression inside string literals for formatting.

val = 'Geeks'  
print(f"{val}for{val} is a portal for {val}.")  
name = 'Tushar'  
age = 23  
print(f"Hello, My name is {name} and I'm {age} years old.")

# TO show the brackets placeholder
print("hellllo!! {{name}}, you are {{age}}")