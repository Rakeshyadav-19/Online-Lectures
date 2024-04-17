# Write a program to clear the clutter inside a folder on your computer. You should use os module to rename all the png images from 1.png all the way till n.png where n is the number of png files in that folder. Do the same for other file formats. 

# For example:
# sfdsf.png --> 1.png
# vfsf.png --> 2.png
# this.png --> 3.png
# design.png --> 4.png
# name.png --> 5.png

import os
import glob

# All files and directories ending with .txt and that don't begin with a dot:
# print(glob.glob("/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/Exercise7_68/*.txt")) 

print("Your current location:- ",os.getcwd())
choice = input("Use cureent location or enter manual:: \nType:\n1 for current\n2 for manual\n")
if(choice == 1):
    dest = os.getcwd()
else:
    dest = input("Enter the file location:: ")

ext = input("Enter the file extension:: ")
files = glob.glob(f"{dest}/*.{ext}")
# print("The files are:\n", files)

i = 1
for f in files:
    print(f)
    source = f
    os.rename(source,f'{dest}/{i}.{ext}')
    i = i + 1

print("The renamed files are: ")
for ref in files:
    print(ref)