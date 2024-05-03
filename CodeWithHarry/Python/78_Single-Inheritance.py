# Consider a class named "Animal" that contains the attributes and behaviors that are common to all animals.
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        
    def make_sound(self):
        print("Sound made by the animal")

# If we want to create a new class for a specific type of animal, such as a dog, we can create a new class named "Dog" that inherits from the Animal class.
class Dog(Animal):
    def __init__(self, name, breed):
        Animal.__init__(self, name, species="Dog")
        self.breed = breed
        
    def make_sound(self):
        print("Bark!")

d = Dog("Dog", "Doggerman")
d.make_sound()

a = Animal("Dog", "Dog")
a.make_sound()


# # Quick Quiz: Implement a Cat class by using the animal class. Add some methods specific to cat
class cat(Animal):
    def __init__(self, name, fur):
        Animal.__init__(self, name, species = "cat")
        self.fur = fur
    
    def make_sound(self):
        print("Meow")
c = cat("cat", "furry")
c.make_sound()
