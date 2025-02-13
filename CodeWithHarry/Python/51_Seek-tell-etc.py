# The seek() function allows you to move the current position within a file to a specific point. The position is specified in bytes, and you can move either forward or backward from the current position.
with open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'r') as f:
  # Move to the 10th byte in the file
  f.seek(10)
  # Read the next 5 bytes
  data = f.read(5)
  print(data)
  print("\n")


# The tell() function returns the current position within the file, in bytes. This can be useful for keeping track of your location within the file or for seeking to a specific position relative to the current position.
with open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/myfile.txt', 'r') as f:
  # Read the first 10 bytes
  data = f.read(10)
  print(data)
  # Save the current position
  current_position = f.tell()
  print(current_position)

  # Seek to the saved position
  pos = f.seek(current_position)
  print(pos)
  print("\n")


# When you open a file in Python using the open function, you can specify the mode in which you want to open the file. If you specify the mode as 'w' or 'a', the file is opened in write mode and you can write to the file. However, if you want to truncate the file to a specific size, you can use the truncate function.
with open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/sample.txt', 'w') as f:
  f.write('Hello World!')
  # We defined size here 5 bytes,it will only keep 5 bytes and delete all else
  f.truncate(5)

with open('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/sample.txt', 'r') as f:
  print(f.read())
  print("\n")