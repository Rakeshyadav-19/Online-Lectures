#Strings are imutable
nm = "Rakesh"
print(len(nm))
print("\n")

#It creates new string does not edit the nm string
print(nm.upper())
print(nm.lower())
print("\n")

#To remove spaces before and after stirng
sttt = " This has Spaces  "
print(sttt)
print(sttt.strip())
print("\n")

#To remove traling(at last) character from string
nnm = "Raajjk!!!!!!!"
print(nnm)
print(nnm.rstrip("!"))
print(nnm.rstrip("a"))
print("\n")

#Replace ALL occrunce of it another sting/character
print(nnm.replace("Raajjk", "Raj"))
print(nnm.replace("a", "k"))
print(nnm.replace("a", ""))
print("\n")

#To make a list of array
arr = "Raj Ram Rax Rat"
print(arr.split(" ")) #Makes list element after a space in this case
print("\n")

#Make first letter captial
arrr = "hello ThIs Is bAd"
print(arrr)
print(arrr.capitalize())
print("\n")

#Add spaces to make string that long
print(len(arrr))
print(len(arr.center(50)))
print(arr.center(50))
print("\n")

#To count the occurunce of certain value in string
print(arrr.count("l"))
print("\n")

#TO check if sting with the given value, return boolean
print(arrr.endswith("d"))
#WE can also check for in between by providing start and end index
print(arrr.endswith("Is",3 ,13))
print("\n")

#TO check if string start with
print("Stratwith")
print(arrr.startswith("hello"))
print("\n")

#Find first occrunce of value and return its index, if not found return -1 
print(arrr.find("Is"))

#If we are sure to find it in aours string
print(arrr.index("Is"))
print("\n")

#To chek if string only has A-Z, a-z, 0-9 only and no other special charcaters
st1 = "ThisIsSimple"
st2 = "This Is Complex"
print(st1.isalnum())
print(st2.isalnum())
#TO check for only A-Z,a-z, AND NOT 0-9
st3 = "11Raj"
st4 = "Raj"
print(st3.isalpha())
print(st4.isalpha())
print("\n")

#To check if string is in Lower case
print(st4.islower())
print("\n")

#To check if string is in Upper case
stp = "UPPERRR"
print(stp.isupper())
print("\n")

#TO check if all values in string are printable
print(arrr.isprintable())
str5 = "New \n Line"
print(str5.isprintable()) #\n is not printable on screen
print("\n")

# To check if string has only spaces or not
st6 = "     "
print(st1.isspace())
print(st6.isspace())
print("\n")

#To check if first letter of each word is captialized
st7 = "This Is A String"
st8 = "This Is a String"
print(st7.istitle())
print(st8.istitle())
print("\n")

#TO change upper-case to lower and Lower-case to upper
print(st7.swapcase())
print("\n")

#TO change the string into tile
st9 = "this is a title"
print(st9.title())