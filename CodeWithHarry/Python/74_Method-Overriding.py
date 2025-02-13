'''Method overriding is a powerful feature in object-oriented programming that allows you to redefine a method in a derived class. The method in the derived class is said to override the method in the base class. When you create an instance of the derived class and call the overridden method, the version of the method in the derived class is executed, rather than the version in the base class.'''

# Method overriding is a way to customize the behavior of a class based on its specific needs.
class Shape1:
    def area(self):  #the area method is defined, but does not have any implementation. If you want to create a derived class that represents a circle, you can override the area method and provide an implementation that calculates the area of a circle:
        pass
class Circle1(Shape1): # the Circle class inherits from the Shape class, and overrides the area method.
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius
    

# Another way to customize the behavior of a class is to call the base class method from the derived class method.
class Shape2:
    def area(self):
        print("Calculating area...") #you want to create a derived class that represents a circle, and you also want to print a message indicating the type of shape, you can use the super function to call the base class method, and add your own message
class Circle2(Shape2):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        print("Calculating area of a circle...")
        super().area() #he Circle class overrides the area method, and calls the base class method using the super function. This allows you to extend the behavior of the base class method, while still maintaining its original behavior.
        return 3.14 * self.radius * self.radius
    

# E.G -
class Shape:
  def __init__(self, x, y):
    self.x = x
    self.y = y
    
  def area(self):
      return self.x * self.y

class Circle(Shape):
    def __init__(self, radius):
      self.radius = radius
      super().__init__(radius, radius)

    def area(self):
        return 3.14 *  super().area()
      
rec = Shape(3, 5)
print(rec.area())

c = Circle(5)
print(c.area())