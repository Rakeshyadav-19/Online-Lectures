# Class methods are defined using the "@classmethod" decorator, followed by a function definition. The first argument of the function is always "cls," which represents the class itself.
class ExampleClass:
    #class methods cannot modify the class in any way. If you need to modify the class, you should use a class level variable instead.
    @classmethod
    def factory_method(cls, argument1, argument2): #class method , creates a new instance of the class "ExampleClass" using the "cls" keyword, and returns the new instance to the caller.
        return cls(argument1, argument2)
    

#E.G -
class Employee:
  company = "Apple"
  name = "name"
  def show(self):
    print(f"The name is {self.name} and company is {self.company}")

  @classmethod #To change the value of class variable.
  def changeCompany(cls, newCompany):
    cls.company = newCompany


e1 = Employee()
e1.name = "Harry"
e1.show()
e1.changeCompany("Tesla")
e1.show()
print(Employee.company)