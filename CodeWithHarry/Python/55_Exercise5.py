# Snake, Water and Gun is a variation of the children's game "rock-paper-scissors" where players use hand gestures to represent a snake, water, or a gun. The gun beats the snake, the water beats the gun, and the snake beats the water. Write a python program to create a Snake Water Gun game in Python using if-else statements. Do not create any fancy GUI. Use proper functions to check for win.


import random

userChnace = int(input("Enter the number of rounds you want to paly: "))
count = 1

compChoice = ["S","W","G"]
uP = 0
cP = 0

while(count <= userChnace):

    print("\n")

    uI = input("Select either one of the following:\nS for Snkae\nW for water\nG for Gun\n")
    cI = compChoice[random.randint(0,2)]

    print(f"You selected {uI} and Computer selected {cI}")

    if((uI=="S" or uI == "s") and (cI == "S")):
        print("Its a tie")
    elif((uI=="S" or uI == "s") and (cI == "W")):
        print("You won")
        uP = uP +1
    elif((uI=="S" or uI == "s") and (cI == "G")):
        print("You Lost")
        cP = cP + 1

    elif((uI=="W" or uI == "w") and (cI == "W")):
        print("Its a tie")
    elif((uI=="W" or uI == "w") and (cI == "G")):
        print("You Won") 
        uP = uP +1
    elif((uI=="W" or uI == "w") and (cI == "S")):
        print("You Lost")
        cP = cP +1
        
    elif((uI=="G" or uI == "g") and (cI == "G")):
       print("Its a tie")
    elif((uI=="G" or uI == "g") and (cI == "S")):
        print("You Won")
        uP = uP +1
    elif((uI=="G" or uI == "g") and (cI == "W")):
        print("You Lost")
        cP = cP +1
    else:
        print("error")
    
    count = count + 1

print("\n")
print(f"Your score is {uP}")
print(f"Computer score is {cP}")
print("\n")
if(uP > cP):
    print("Congrats user you have won")
elif(uP < cP):
    print("Better Luck next time computer won")
else:
    print("Its a tie")