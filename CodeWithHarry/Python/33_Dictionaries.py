# Dictionaries are ordered collection of data items, the items are key-value pairs 

info = {'name':'Karan', 'age':19, 'eligible':True}
print(info)
print("\n")

'''                     Accessing Dictionary items:                     '''

# I. Accessing single values:
print(info['name']) #Gives error if not present
print(info.get('name')) #Gives none if not present
print("\n")

# II. Accessing multiple values:
print(info.values())

for key, value in info.items():
  print(f"The value corresponding to the key {key} is {value}") 
print("\n")

# III. Accessing keys:
print(info.keys())

for key in info.keys():
  print(f"The value corresponding to the key {key} is {info[key]}")
print("\n")

# IV. Accessing key-value pairs:
print(info.items())
