# open() function is used to open a file. It takes two arguments: the name of the file and the mode in which the file should be opened.

f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'r')

"""
There are various modes in which we can open files.

read (r): This mode opens the file for reading only and gives an error if the file does not exist. This is the default mode if no mode is passed as a parameter.

write (w): This mode opens the file for writing only and creates a new file if the file does not exist.

append (a): This mode opens the file for appending only and creates a new file if the file does not exist.

create (x): This mode creates a file and gives an error if the file already exists.

text (t): Apart from these modes we also need to specify how the file must be handled. t mode is used to handle text files. t refers to the text mode. There is no difference between r and rt or w and wt since text mode is the default. The default mode is 'r' (open for reading text, synonym of 'rt' ).

binary (b): used to handle binary files (images, pdfs, etc).
"""

# The read() method reads the entire contents of the file and returns it as a string.
contents = f.read()
print(contents)


# To write to a file, we first need to open it in write mode.
f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'w')
f.write('Namaste Duniya!') #writing to a file will overwrite its contents.
f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'rt') #read text file rt
contents = f.read()
print(contents)


#  If you want to append to a file instead of overwriting it, you can open it in append mode.
f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'a')
f.write('Hello, world!') 
f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'r')
contents = f.read()
print(contents)



# It is important to close a file
f.close()
# you can use the with statement to automatically close the file after you are done with it.
with open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'r') as f:
    f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'rt')
    # ... do something with the file