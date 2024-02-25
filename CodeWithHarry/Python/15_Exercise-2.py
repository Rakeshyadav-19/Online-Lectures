#To wish user according to the time

import time

# named_tuple = time.localtime() # get struct_time
# time_string = time.strftime("%m/%d/%Y, %H:%M:%S", named_tuple)
# print(time_string)

name = input("Enter your name: ")
greet = int(time.strftime('%H'))

if((greet > 0) and (greet < 7)):
    print("Good early morning",name)
elif((greet > 7) and (greet < 12)):
    print("Good Moring",name)
elif((greet > 12)  and (greet < 19)):
    print("Good Evening",name)
elif((greet > 19)  and (greet < 24)):
    print("Good Night",name)

print("Current Time: ")
print(time.strftime('%I:%M:%S'))
print("Todays Date: ")
print(time.strftime('%d/%m/%Y'))
print("Todays day is: ")
print(time.strftime('%A'))
