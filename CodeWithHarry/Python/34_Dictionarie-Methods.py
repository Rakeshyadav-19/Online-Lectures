# update() method updates the value of the key provided to it if the item already exists in the dictionary, else it creates a new key-value pair.
info = {'name':'Karan', 'age':19, 'eligible':True}
print(info)
info.update({'age':20})
info.update({'DOB':2001})
print(info)

'''                     Removing items from dictionary:                     '''

# I] clear() method removes all the items from the list.
info1 = {'name':'Karan', 'age':19, 'eligible':True}
info1.clear()
print(info1)

# II] pop() method removes the key-value pair whose key is passed as a parameter.
info.pop('eligible')
print(info)

# III] popitem() method removes the last key-value pair from the dictionary.
info.popitem()
print(info)

# IV] use the del keyword to remove a dictionary item.
del info['age']
print(info)
# If key is not provided, then the del keyword will delete the dictionary entirely.
info = {'name':'Karan', 'age':19, 'eligible':True, 'DOB':2003}
del info
''' print(info)  '''