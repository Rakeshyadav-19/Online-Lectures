import os

# to open a file for reading
# Open the file in read-only mode
f = os.open("/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt", os.O_RDONLY)
# Read the contents of the file
contents = os.read(f, 9999)
print(contents)
# Close the file
os.close(f)


# To open a file for writing
# Open the file in write-only mode
f = os.open("/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt", os.O_WRONLY)
# Write to the file
os.write(f, b"Hello, world!")
print(contents)
# Close the file
os.close(f)


# use the os.listdir function to get a list of the files in a directory:
# Get a list of the files in the current directory
files = os.listdir(".")
print(files)


# use the os.system function to run a command and get the output:
# Run the "ls" command and print the output
output = os.system("ls")
print(output) 

# use the os.popen function to run a command and get the output as a file-like object:
# Run the "ls" command and get the output as a file-like object
f = os.popen("ls")
# Read the contents of the output
outputs = f.read()
print(outputs)
# Close the file-like object
f.close()

print(os.getcwd())



'''
# If path not exist crteat this folder
if(not os.path.exists("data")):
    os.mkdir("data")
# inside that folder create this folders
for i in range(0, 100):
    os.mkdir(f"data/Day{i+1}")
'''

'''
# To rename files inside this folder to this
for i in range(0, 100):
    os.rename(f"data/Tutorial{i+1}", f"data/Tutorial {i+1}")
'''

'''
# list all the folders inside this folder
folders = os.listdir("data")

# To get current working directory
print(os.getcwd())
# change dir
os.chdir("/Users")
# get current workinf dir
print(os.getcwd())
# print all the folder inside data and print any folder if inside data
for folder in folders:
    print(folder)
    print(os.listdir(f"data/{folder}"))
'''