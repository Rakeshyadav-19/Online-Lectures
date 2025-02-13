# A class method belongs to the class rather than to an instance of the class. One common use case for class methods as alternative constructors is when you want to create an object from data that is stored in a different format, such as a string or a dictionary. 


# The default constructor for the class might look like this:
class Personn:
    def __init__(self, name, age):
        self.name = name
        self.age = age
# But what if you want to create a Person object from a string that contains the person's name and age, separated by a comma?
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_string(cls, string):
        name, age = string.split(',')
        return cls(name, int(age))
# Now you can create a Person object from a string like this:
person = Person.from_string("John Doe, 30")
print(person.name, person.age)
print("\n")



# Another common use case for class methods as alternative constructors is when you want to create an object with a different set of default values than what is provided by the default constructor.


# The default constructor for the class might look like this:
class Rectanglee:
    def __init__(self, width, height):
        self.width = width
        self.height = height
# But what if you want to create a Rectangle object with a default width of 10 and a default height of 5
class Rectangle:
  def __init__(self, width, height):
    self.width = width
    self.height = height

  @classmethod
  def square(cls, size):
    return cls(size, size)
# Now you can create a square rectangle like this:
rectangle = Rectangle.square(10)
print(rectangle.width)
print(rectangle.height)
print("\n")



# E.G -
class Employee:
  def __init__(self, name, salary):
    self.name = name 
    self.salary = salary
    
  @classmethod
  def fromStr(cls, string):
    return cls(string.split("-")[0], int(string.split("-")[1]))
    
e1 = Employee("RAX", 12000)
print(e1.name)
print(e1.salary)

string = "John-12000"
e2 = Employee.fromStr(string)
print(e2.name)
print(e2.salary)

