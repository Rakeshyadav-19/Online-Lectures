# Write a python program which reminds you of drinking water every hour or two. Your program can either beep or send desktop notifications for a specific operating system


#LINUX
import subprocess
import time

hr = int(input("Enter the time inte rval for reminder[IN HOURS]:- "))
hr = 3600 * hr
time.sleep(hr)

subprocess.run(["notify-send", "Time to drink water"])
