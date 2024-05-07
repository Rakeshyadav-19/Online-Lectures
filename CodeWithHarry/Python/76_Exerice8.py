# Write a program to manipulate pdf files using pyPDF. Your programs should be able to merge multiple pdf files into a single pdf. You are welcome to add more functionalities
# pypdf is a free and open-source pure-python PDF library capable of splitting, merging, cropping, and transforming the pages of PDF files. It can also add custom data, viewing options, and passwords to PDF files. pypdf can retrieve text and metadata from PDFs as well.

from PyPDF2 import PdfWriter
import os

merger = PdfWriter()

Numpdf = int(input("Enter the number of PDF's:: "))
i = 0
pdf = []
print("After evry file location input press ENTER")
while(i != Numpdf):
    loc = input(f"Enter File location for PDF No. {i+1}:: ")
    merger.append(loc)
    i = i+1

path = input("Enter location to save file:: ")
name = input("Enter the name for merged pdf:: ")
merger.write(f"{path}/{name}.pdf")
merger.close()


if os.path.isfile(os.path.join(path, name)):
    print("PDF merged sucessfully")
else:
    print("File not found.")

# Harrry-
'''
from PyPDF2 import PdfWriter
import os

merger = PdfWriter()
files = [file for file in os.listdir() if file.endswith(".pdf")]

for pdf in files:
    merger.append(pdf)

merger.write("merged-pdf.pdf")
merger.close()
'''