'''                     Joining Sets                        '''

# I. union() and update():
# prints all items that are present in the two sets. 

# The union() method returns a new set 
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Tokyo", "Seoul", "Kabul", "Madrid"}
cities3 = cities.union(cities2)
print(cities3)
# update() method adds item into the existing set from another set.
cities.update(cities2)
print(cities)


# II. intersection and intersection_update():
# prints only items that are similar to both the sets.

# intersection() method returns a new set
cities3 = cities.intersection(cities2)
print(cities3)
# intersection_update() method updates into the existing set from another set.
cities.intersection_update(cities2)
print(cities)


# III. symmetric_difference and symmetric_difference_update():
# prints only items that are not similar to both the sets. 

# symmetric_difference() method returns a new set
cities3 = cities.symmetric_difference(cities2)
print(cities3)
# symmetric_difference_update() method updates into the existing set from another set.
cities.symmetric_difference_update(cities2)
print(cities)


# IV. difference() and difference_update():
# prints only items that are only present in the original set and not in both the sets

# difference() method returns a new set
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul", "Delhi"}
cities3 = cities.difference(cities2)
print(cities3)
# difference_update() method updates into the existing set from another set.
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul", "Delhi"}
print(cities.difference(cities2))



'''                     Set Methods                     '''

# The isdisjoint() method checks if items of given set are present in another set. returns Boolean
print(cities.isdisjoint(cities2))

# The issuperset() method checks if all the items of a particular set are present in the original set, return boolean
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul"}
print(cities.issuperset(cities2))
cities3 = {"Seoul", "Madrid","Kabul"}
print(cities.issuperset(cities3))