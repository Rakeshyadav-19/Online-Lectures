# Class variables are defined at the class level and are shared among all instances of the class. They are defined outside of any method and are usually used to store information that is common to all instances of the class.
class MyClass1:
    class_variable = 0 #shared among all instances of the class
    
    def __init__(self):
        MyClass1.class_variable += 1
        
    def print_class_variable(self):
        print(MyClass1.class_variable)
        

obj1 = MyClass1()
obj2 = MyClass1()

obj1.print_class_variable() # Output: 2
obj2.print_class_variable() # Output: 2
print("\n")


# Instance variables are defined at the instance level and are unique to each instance of the class. They are defined inside the init method and are usually used to store information that is specific to each instance of the class. 
class MyClass:
    def __init__(self, name):
        self.name = name
        
    def print_name(self):
        print(self.name)

# own value for the name variable
obj1 = MyClass("John")
obj2 = MyClass("Jane")

obj1.print_name() # Output: John
obj2.print_name() # Output: Jane
print("\n")



# E.G -
class Employee:
  companyName = "Apple"
  noOfEmployees = 0

  def __init__(self, name):
    self.name = name
    self.raise_amount = 0.02
    Employee.noOfEmployees +=1
    
  def showDetails(self):
    print(f"The name of the Employee is {self.name} and the raise amount in {self.noOfEmployees} sized {self.companyName} is {self.raise_amount}")

# Employee.showDetails(emp1)
emp1 = Employee("Rakesh")
emp1.raise_amount = 0.3
emp1.companyName = "Apple India" #Instance variable eas there hence this was shown, if not there class variable would ahve been shown
emp1.showDetails()
Employee.companyName = "Google"
print(Employee.companyName)

emp2 = Employee("Rohan")
emp2.companyName = "Nestle"
emp2.showDetails() 
#OR
Employee.showDetails(emp2)
