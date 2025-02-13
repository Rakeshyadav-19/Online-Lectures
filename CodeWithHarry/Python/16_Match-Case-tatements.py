'''TO show a command output'''
# import os
# os.system("python --version")

'''
Match case is same as switch case
'''

num = int(input("Enter the value for num: "))
match num:
    case 999:
        print("Value is greater than 0") 
    case 1:
        print("You won")
    #This is default case,if no above executes this executes
    case _:
        print("You entered:",num)