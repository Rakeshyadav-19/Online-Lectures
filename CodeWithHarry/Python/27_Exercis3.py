import random
'''
Create a program capable of displaying questions to the user like KBC. Use List data type to store the questions and their correct answers. Display the final amount the person is taking home after playing the game.
'''

quest = ["What did the janitor say when he jumped out of the closet?\na) Surprise!\nb) Boo!\nc) Im  here to clean up!\nd) Is it lunchtime yet?", 
         "Why did the scarecrow win an award?\na) Because he was outstanding in his field.\nb) Because he could outwit the crows.\nc) Because he had a great sense of humor.\nd) Because he was stuffed with jokes.",
         "How does a penguin build its house?\na) Igloos it together.\nb) Igloos and ice bricks.\nc) Igloos the pieces in place.\nd) Igloos with its flippers.",
         "Why don't skeletons fight each other?\na) They don't have the guts.\nb) They are too busy dancing.\nc) They are bone-tired.\nd) They are afraid of breaking a bone.",
         "What do you call fake spaghetti?\na) Impasta\nb) Fauxghetti\nc) Mockaroni\nd) Counterfeitini"]
ans = ["c", "a", "a", "a", "a"]
amount = [10000, 30000, 60000, 100000, 150000]
# question = random.randint(1, 10)

print("\"WELCOME TO THE GAME OF KBC\"")
userName = input("Enter your name: ") 
prizeMony = 0
num = 0
for pick in quest:
    
    print("Your question is: ")
    print(pick)
    print("Select any one option from above: ")
    userAnswer = input()

    correct = ans[num]
    if userAnswer == correct:
        print("Conratulations", userName, "your ans is correct")
        print("The amount you have won:", amount[num])
        prizeMony = prizeMony + amount[num]
        flag = 1
    else:
        print("SORRY", userName, "Better Luck Next Time")
        flag = 0

    num = num + 1
    if flag == 0 or num == len(quest):
        print("The amount you are taking home is:",prizeMony)
        break