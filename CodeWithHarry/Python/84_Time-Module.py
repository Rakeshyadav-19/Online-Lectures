# provides a set of functions to work with time-related operations, such as timekeeping, formatting, and time conversions.

# time.time() -  current time as a floating-point number, representing the number of seconds since the epoch (the point in time when the time module was initialized).
import time
print(time.time())
print("\n")

# time.sleep() - suspends the execution of the current thread for a specified number of seconds.
print("Start:", time.time())
time.sleep(2)
print("End:", time.time())
print("\n")

# time.strftime() - formats a time value as a string, based on a specified format. This function is particularly useful for formatting dates and times in a human-readable format, such as for display in a GUI, a log file, or a report. 
t = time.localtime()
formatted_time = time.strftime("%Y-%m-%d %H:%M:%S", t)
print(formatted_time)