'''                     Joining Sets                        '''

# I. union() and update():
# prints all items that are present in the two sets. 

# The union() method returns a new set 
print("Union")
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Tokyo", "Seoul", "Kabul", "Madrid"}
cities3 = cities.union(cities2)
print(cities3)
# update() method adds item into the existing set from another set.
cities.update(cities2)
print(cities)
print("\n")


# II. intersection and intersection_update():
# prints only items that are similar to both the sets.

# intersection() method returns a new set
print("Intersection")
cities3 = cities.intersection(cities2)
print(cities3)
# intersection_update() method updates into the existing set from another set.
cities.intersection_update(cities2)
print(cities)
print("\n")


# III. symmetric_difference and symmetric_difference_update():
# prints only items that are not similar to both the sets. 

# symmetric_difference() method returns a new set
print("symmetric_difference")
cities3 = cities.symmetric_difference(cities2)
print(cities3)
# symmetric_difference_update() method updates into the existing set from another set.
cities.symmetric_difference_update(cities2)
print(cities)
print("\n")


# IV. difference() and difference_update():
# prints only items that are only present in the original set and not in both the sets

# difference() method returns a new set
print("difference")
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul", "Delhi"}
cities3 = cities.difference(cities2)
print(cities3)
# difference_update() method updates into the existing set from another set.
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul", "Delhi"}
print(cities.difference(cities2))
print("\n")


'''                     Set Methods                     '''

# The isdisjoint() method checks if items of given set are present in another set. returns Boolean
print("isdisjoin")
print(cities.isdisjoint(cities2))
print("\n")

# The issuperset() method checks if all the items of a particular set are present in the original set, return boolean
print("isupperset")
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Seoul", "Kabul"}
print(cities.issuperset(cities2))
cities3 = {"Seoul", "Madrid","Kabul"}
print(cities.issuperset(cities3))
print("\n")

# issubset() method checks if all the items of the original set are present in the particular set,return boolean
print("issubset")
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Delhi", "Madrid"}
print(cities2.issubset(cities))
print("\n")

# If you want to add a single item to the set use the add() method.
print("add")
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities.add("Helsinki")
print(cities)
print("\n")

# If you want to add more than one item, simply create another set or any other iterable object(list, tuple, dictionary), and use the update() method to add it into the existing set.
print("update")
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities2 = {"Helsinki", "Warsaw", "Seoul"}
cities.update(cities2)
print(cities)
print("\n")

# We can use remove() and discard() methods to remove items form list.
# The main difference between remove and discard is that, if we try to delete an item which is not present in set, then remove() raises an error, whereas discard() does not raise any error.
print("remove")
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities.remove("Tokyo")
print(cities)

print("discard")
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities.discard("Seoul")
print(cities)
print("\n")

# This method removes the last item of the set but the catch is that we don’t know which item gets popped as sets are unordered. However, you can access the popped item if you assign the pop() method to a variable.
print("pop")
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
item = cities.pop()
print(cities)
print(item)
print("\n")

# del is not a method, rather it is a keyword which deletes the set entirely.
print("del")
cities_ = {"Tokyo", "Madrid", "Berlin", "Delhi"}
del cities_
# print(cities_)   #We get error here as it has been deleted now
print("\n")

# This method clears all items in the set and prints an empty set.
print("clear")
cities = {"Tokyo", "Madrid", "Berlin", "Delhi"}
cities.clear()
print(cities)
print("\n")

# You can also check if an item exists in the set or not.
print("check exixtence")
info = {"Carla", 19, False, 5.9}
if False in info:
    print("False is present.")
else:
    print("False is absent.")