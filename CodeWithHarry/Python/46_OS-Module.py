import os


'''
# If path not exist crteat this folder
if(not os.path.exists("data")):
    os.mkdir("data")
# inside that folder create this folders
for i in range(0, 100):
    os.mkdir(f"data/Day{i+1}")
'''

'''
# To rename files inside this folder to this
for i in range(0, 100):
    os.rename(f"data/Tutorial{i+1}", f"data/Tutorial {i+1}")
'''

'''
# list all the folders inside this folder
folders = os.listdir("data")

# To get current working directory
print(os.getcwd())
# change dir
os.chdir("/Users")
# get current workinf dir
print(os.getcwd())
# print all the folder inside data and print any folder if inside data
for folder in folders:
    print(folder)
    print(os.listdir(f"data/{folder}"))
'''