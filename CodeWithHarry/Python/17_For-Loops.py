#For with string
name = 'Rakesh'
for i in name:
    print(i,end=", ")
print('\n')

#For with list
color = ['Red','Green','Yellow','Black','Pink','White']
for c in color:
    print(c)
    for x in c:
        print(x)
print('\n')

#For to print numbers
for j in range(10): #Starts from 0 and end at (10-1) = 9
    print(j)
print('\n')
#To print with within range
for k in range(5,9):
    print(k)
print('\n')

#The use of step argument in for loop
#specify the increment between each iteration of the loop
for l in range(0,10,3):
    print(l)
    