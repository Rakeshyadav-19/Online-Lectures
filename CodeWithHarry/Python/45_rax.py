def welcome():
  print("Hey you are welcome from rax")

print(__name__)

# If file ir run from here it will execute this
# If file is imported there and that file is run this part will not get executed
# If we don't use this when we run that file this part will also get executed
if __name__ == "__main__":
  welcome()