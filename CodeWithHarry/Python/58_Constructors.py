# constructor is a special method in a class used to create and initialize an object of a class. There are different types of constructors. Constructor is invoked automatically when an object of a class is created.

# Types of Constructors in Python
# Parameterized Constructor
# Default Constructor

'''
Parameterized Constructor in Python
When the constructor accepts arguments along with self, it is known as parameterized constructor.
These arguments can be used inside the class to assign the values to the data members.
'''
class Detailss:
    def __init__(self, animal, group):
        self.animal = animal
        self.group = group

obj1 = Detailss("Crab", "Crustaceans")
print(obj1.animal, "belongs to the", obj1.group, "group.")
print("\n")

'''
Default Constructor in Python
When the constructor doesn't accept any arguments from the object and has only one argument, self, in the constructor, it is known as a Default constructor.
'''
class Details:
  def __init__(self):
    print("animal Crab belongs to Crustaceans group")
obj1=Details()
print("\n")


# Ex -
class Person:
  def __init__(self, name, occ): #init is one of the reserved functions in Python. In Object Oriented Programming, it is known as a constructor.
    print("Hey I am a person")
    self.name = name
    self.occ = occ

  def info(self):
    print(f"{self.name} is a {self.occ}")

a = Person("Rax", "Developer")
b = Person("Divya", "HR") 

print("\n")
a.info()
b.info()

# print(a.name)
# a.name = "Divya"
# a.occ = "HR"
# a.info()
