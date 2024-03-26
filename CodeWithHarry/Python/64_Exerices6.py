# Write a Library class with no_of_books and books as two instance variables. Write a program to create a library from this Library class and show how you can print all books, add a book and get the number of books using different methods. Show that your program doesnt persist the books after the program is stopped!

from tabnanny import check

no_of_books = 4
class Library:
    books = ['Harry Potter','Silent Voice','Secret','Solo Leveling']

    def check(self,no_of_books):
        print(no_of_books)
        print(len(self.books))
        if(no_of_books == len(self.books)):
            print("Data set ok")
        else:
            print("Problem in data set")

    def add(self,bookName,no_of_books):
        self.books.append(bookName)
        
        print(f"The book added: {bookName} and the count now is {no_of_books}")
        print(self.books)
    
    def show(self):
        for i in self.books:
            print(i)

inp = 2
while(inp != 0):
    inp = int(input("What would you like to do: \n1.Add Book \n2.Print Books \n0 for EXIT\n"))
    data = Library()
    if(inp == 1):
        bookName = input("Enter the name of book: ")
        data.add(bookName,no_of_books)
        no_of_books = no_of_books + 1
        data.check(no_of_books)
    elif(inp == 2):
        data.show()
    else:
        print("Wrong input")

# E.G -
'''
class Library:
  def __init__(self):
    self.noBooks = 0
    self.books = []
    
  def addBook(self, book):
    self.books.append(book)
    self.noBooks = len(self.books)

  def showInfo(self):
    print(f"The library has {self.noBooks} books. The books are")
    for book in self.books:
      print(book)


l1 = Library()
l1.addBook("Harry Potter1")
l1.addBook("Harry Potter2")
l1.addBook("Harry Potter3")
l1.showInfo()
'''