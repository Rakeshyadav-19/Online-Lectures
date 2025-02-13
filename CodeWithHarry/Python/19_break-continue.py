#Use of break keyword
for i in range(1,16):
    print("5 X",i,"=",i*5)
    if(i == 10):
        break #At the 10th itteration the loop is exited
print("\n")


#Use of continue keyword
for j in range(1,16):
    if(j == 11 or j == 5):
        continue
    print("10 X",j,"=",j*10)