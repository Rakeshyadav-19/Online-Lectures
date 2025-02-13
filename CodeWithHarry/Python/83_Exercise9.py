# Write a program to pronounce list of names using win32 API. If you are given a list l as follows:
# l = ["Rahul", "Nishant", "Harry"]

'''I am using Linux'''
from playsound import playsound
from gtts import gTTS

names = ["rax","ram","raj"]

def Talk(name):
    tts = gTTS(text=f"shoutout to {name}", lang='en', slow=False)
    tts.save("/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/83_Shoutout.mp3")
    playsound('/home/rax/Documents/GIT/Online-Lectures/CodeWithHarry/Python/83_Shoutout.mp3')

for name in names:
    Talk(f"{name}")