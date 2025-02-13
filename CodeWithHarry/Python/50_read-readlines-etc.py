# The readline() method reads a single line from the file. If we want to read multiple lines, we can use a loop.
f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'r')
while True:
    line = f.readline()
    if not line:
        break
    print(line)
print("\n")
# The readlines() method reads all the lines of the file and returns them as a list of strings.


# The writelines() method in Python writes a sequence of strings to a file. The sequence can be any iterable object, such as a list or a tuple.
f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'w')
lines = ['line 1\n', 'line 2\n', 'line 3\n']
f.writelines(lines)
f.close()

f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'r')
while True:
    line = f.readline()
    if not line:
        break
    print(line)
print("\n")


# This method does not add newline characters between the strings in the sequence. If you want to add newlines between the strings, you can use a loop to write each string separately:
f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'w')
lines = ['line 1', 'line 2', 'line 3']
for line in lines:
    f.write(line + '\n')
f.close()

f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'r')
while True:
    line = f.readline()
    if not line:
        break
    print(line)
print("\n")



# Example 
f = open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile2.txt', 'r')
i = 0
while True:
  i = i + 1
  line = f.readline()
  if not line:
    break
  m1 = int(line.split(",")[0])
  m2 = int(line.split(",")[1])
  m3 = int(line.split(",")[2])
  print(f"Marks of student {i} in Maths is: {m1*2}")
  print(f"Marks of student {i} in English is: {m2*2}")
  print(f"Marks of student {i} in SST is: {m3*2}")
  print(line)
