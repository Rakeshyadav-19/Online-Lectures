# Write a python program to translate a message into secret code language. Use the rules below to translate normal English into secret code language

# Coding:
# if the word contains atleast 3 characters, remove the first letter and append it at the end
#   now append three random characters at the starting and the end
# else:
#   simply reverse the string

# Decoding:
# if the word contains less than 3 characters, reverse it
# else:
#   remove 3 random characters from start and end. Now remove the last letter and append it to the beginning

# Your program should ask whether you want to code or decode
'''--------------------------------**************************---------------------------------------'''


# Accepting choice from user:
from itertools import product
from string import ascii_lowercase
import random
from random import randint


while True:
    try:
        choice = int(input("What task would you like to do: \n1.Code\n2.Decode\n"))

    except ValueError:
        continue

    if choice == 1 or choice == 2:
        break

def coding(code):
    final = []
    i = 0
    print(code)
    for word in code:
        if len(word) < 3:
            final.insert(i, "".join(reversed(code[i])))
        else:
            keywords = [''.join(i) for i in product(ascii_lowercase, repeat = 3)]
            num1 = random.randint(0,17576)
            num2 = random.randint(0,17576)
            lent = len(word)
            key = list(word)
            
            key.insert(0, keywords[num1])
            key.insert((lent + 1), keywords[num2])

    
            final.insert(i, " ".join(key))
        i = i + 1
    print(final)
    # print(len(keywords))
def decoding(decode):
    print(decode)


# Comparing the choice
match choice:
    case 1:
        msg = input("Enter the text to be coded: \n")
        code = msg.split(" ") #[::-1]
        coding(code)
    case 2:
        msg = str(input("Enter the text to be decoded: \n"))
        decode = msg.split(" ")
        decoding(decode)
