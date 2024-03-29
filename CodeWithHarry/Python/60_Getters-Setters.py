# Getters in Python are methods that are used to access the values of an object's properties. They are used to return the value of a specific property, and are typically defined using the @property decorator.
class MyClass1:
    def __init__(self, value):
        self._value = value

    @property #Getter
    def val(self): #Function in class is called mathod
        return self._value
# To use the getter, we can create an instance of the MyClass class, and then access the value property as if it were an attribute
obj = MyClass1(10)
print(obj._value)
print(obj.val) #Use of getter



# It is important to note that the getters do not take any parameters and we cannot set the value through getter method.For that we need setter method which can be added by decorating method with @property_name.setter.
class MyClass2:
    def __init__(self, value):
        self._value = value

    @property
    def value(self):
        return self._value

    @value.setter
    def value(self, new_value):
        self._value = new_value
obj = MyClass2(10)
print(obj.value)
obj.value = 20
print(obj.value)


# E.X -
class MyClass:
  def __init__(self, value):
      self._value = value
    
  def show(self):
    print(f"Value is {self._value}")
    
  @property
  def ten_value(self):
      return 10* self._value
    
  @ten_value.setter
  def ten_value(self, new_value):
      self._value = new_value/10

obj = MyClass(10)
obj.ten_value = 67
print(obj.ten_value)
obj.show()


# getters are a convenient way to access the values of an object's properties, while keeping the internal representation of the property hidden. This can be useful for encapsulation and data validation.