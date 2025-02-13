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


from itertools import product
from string import ascii_lowercase
import random


# Accepting choice from user:
while True:
    try:
        choice = int(input("What task would you like to do: \n1.Code\n2.Decode\n"))
    except ValueError:
        continue
    if choice == 1 or choice == 2:
        break

# Coding block
def coding(code):
    final = []
    i = 0
    # print the list
    print(code)
    
    for word in code:
        if len(word) < 3:
            # Simply revrse the string
            final.insert(i, "".join(reversed(code[i])))
        else:
            # Generate random 3 letter word
            keywords = [''.join(i) for i in product(ascii_lowercase, repeat = 3)]
            # random num for the ran word
            num1 = random.randint(0,17576)
            num2 = random.randint(0,17576)
            lent = len(word)
            key = list(word)
            
            # insert first letter at last and pop it
            key.insert(lent+1, key[0])
            key.pop(0)

            # Insert the random words
            key.insert(0, keywords[num1])
            key.insert((lent + 2), keywords[num2])

            # Join the word with more than  3 letters
            final.insert(i, " ".join(key).replace(" ",""))
        # To get the word working on form main list
        i = i + 1
    print(" ".join(final))
    # print(len(keywords))
def decoding(decode):
    final = []
    i = 0
    # Print the list
    print(decode)

    for word in decode:
        if len(word) < 3:
            # Simply revrse the string
            final.insert(i, "".join(reversed(decode[i])))
        else:
            key = list(word)

            # pop out the first 3 and last 3 elements
            for k in range(0,3):
                key.pop(0)
            for j in range(0,3):
                key.pop(-1)

            # insert and delete the final letter
            z = len(key)
            key.insert(0, key[z-1])
            key.pop(z)

            # Join the word with 3 letters
            final.insert(i, " ".join(key).replace(" ",""))
        # To get the word working on form main list
        i = i + 1
    print(" ".join(final))


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


"""                 Harry Bhai                  """
'''
st = input("Enter message")
words = st.split(" ")
coding = input("1 for Coding or 0 for Decoding")
coding = True if (coding=="1") else False
print(coding)
if(coding):
  nwords = []
  for word in words:
    if(len(word)>=3):
      r1 = "dsf"
      r2 = "jkr"
      stnew = r1+ word[1:] + word[0] + r2
      nwords.append(stnew)
    else:
      nwords.append(word[::-1])
  print(" ".join(nwords))

else:
  nwords = []
  for word in words:
    if(len(word)>=3): 
      stnew = word[3:-3]
      stnew = stnew[-1] + stnew[:-1]
      nwords.append(stnew)
    else:
      nwords.append(word[::-1])
  print(" ".join(nwords)) '''