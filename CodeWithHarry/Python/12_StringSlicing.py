name = "Rakesh"
names = "rakesh,Prem,Tejraj"

#TO get length of string
print(len(names))
print(len(name))

#It takes value from 0 to (n-1) = (6-1)->5
#If we don't write starting value it takes 0,
#If we don't write ending value it takes length of string
print(names[0:6])

#If we write in -ve value, it do len(variable)-value
print(name[:-3])

#5-3=2, 5-1=4 => [2:4], from 2 to (4-1)
print(name[-3:-1])