# Write a program to pronounce list of names using win32 API. If you are given a list l as follows:
# l = ["Rahul", "Nishant", "Harry"]

'''I am using Linux'''

import pyttsx3
engine = pyttsx3.init()
names = ["rax","ram","raj"]
for name in names:
    engine.say(f"Shoutout to {name}")
engine.runAndWait()