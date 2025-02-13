class Detailss:
    name = "Rohan"
    age = 20
obj1 = Detailss()
print(obj1.name)
print(obj1.age)


# self parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.
# It must be provided as the extra parameter inside the method definition.
class Details:
    name = "Rohan"
    age = 20

    def desc(self):
        print("My name is", self.name, "and I'm", self.age, "years old.")

obj1 = Details()
obj1.desc()


# Ex -
class Person:
  # name,aoccupation , networth are properties
  name = "Rax" #Defaulr values
  occupation = "Student"
  networth = 10

  # info is method
  def info(self): #Self means the value of objects for whom is it clled
    print(f"{self.name} is a {self.occupation}")

# Created class objects
a = Person()
b = Person()
c = Person()

# To updatet the value of variables in class
a.name = "Shubham"
a.occupation = "Accountant"

b.name = "Nitika"
b.occupation = "HR"
b.networth = 100

#To access a specific value
print(a.name, a.occupation) 
print(b.networth)

# To call the functon using class object 
a.info()
b.info()
c.info() # If value no changed sends default value