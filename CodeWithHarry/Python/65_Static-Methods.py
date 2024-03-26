'''
methods that belong to a class rather than an instance of the class. They are defined using the @staticmethod decorator and do not have access to the instance of the class (i.e. self). They are called on the class itself, not on an instance of the class. Static methods are often used to create utility functions that don't need access to instance data.
'''
class Maths:
    @staticmethod
    def add(a, b): #static method of the Math class
        return a + b

result = Maths.add(1, 2) #The method can be called on the class itself, without the need to create an instance of the class.
print(result) # Output: 3

# E.G:
class Math:
  def __init__(self, num):
    self.num = num

  def addtonum(self, n):
    self.num = self.num +n
    
  @staticmethod
  def add(a, b):
      return a + b

result = Math.add(1, 2)
print(result) # Output: 3
a = Math(5)
print(a.num)
a.addtonum(6)
print(a.num)