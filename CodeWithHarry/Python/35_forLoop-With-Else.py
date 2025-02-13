# The program exits the loop only after the else block is executed.

''' SYNTAX -
for counter in sequence:
    #Statements inside for loop block
else:
    #Statements inside else block
'''

for x in range(5):
    print ("iteration no {} in for loop".format(x+1))
else:
    print ("else block in loop")
print ("Out of loop")