# The super() keyword in Python is used to refer to the parent class, used when you want to call a parent class method in a child class.
# It is especially useful when a class inherits from multiple parent classes and you want to call a method from one of the parent classes.
class ParentClass:
    def parent_method(self):
        print("This is the parent method.")

class ChildClasss(ParentClass):
    def parent_method(self):
       print("Helllo ")
       super().parent_method()
    def child_method(self):
        print("This is the child method.")
        super().parent_method()

child_object = ChildClasss()
child_object.child_method()
child_object.parent_method() #If child class don't have this method and parent have it will call the method in parnet class. If child has this method it will execute.
# while called the Child class method, if want to use the method in parent at use the super function.
print("\n")

# The super() keyword is also useful when a class inherits from multiple parent classes. In this case, you can specify the parent class from which you want to call the method.
class ParentClass1:
    def parent_method(self):
        print("This is the parent method of ParentClass1.")

class ParentClass2:
    def parent_method(self):
        print("This is the parent method of ParentClass2.")

class ChildClass(ParentClass1, ParentClass2):
    def child_method(self):
        print("This is the child method.")
        super().parent_method()

child_object = ChildClass()
child_object.child_method()
print("\n")


# E.G -
class Employee:
  def __init__(self, name, id):
    self.name = name
    self.id = id

class Programmer(Employee):
  def __init__(self, name, id, lang):
    super().__init__( name, id)
    self.lang = lang

rohan = Employee("Rohan Das", "420")
Rax = Programmer("Rakesh", "2345", "Python")
print(Rax.name)
print(Rax.id)
print(Rax.lang)