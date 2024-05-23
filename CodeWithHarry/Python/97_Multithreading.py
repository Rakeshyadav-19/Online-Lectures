# Multithreading is a technique in programming that allows multiple threads of execution to run concurrently within a single process. 

import threading

# To create a thread, we need to create a Thread object and then call its start() method. The start() method runs the thread and then to stop the execution, we use the join() method.
def my_func():
  print("Hello from thread", threading.current_thread().name)
  thread = threading.Thread(target=my_func)
  thread.start()
  thread.join()
# my_func()

'''
The following are some of the most commonly used functions in the threading module:

- threading.Thread(target, args): This function creates a new thread that runs the target function with the specified arguments.

- threading.Lock(): This function creates a lock that can be used to synchronize access to shared resources between threads.
'''

# Creating multiple threads is a common approach to using multithreading in Python. The idea is to create a pool of worker threads and then assign tasks to them as needed. This allows you to take advantage of multiple CPU cores and process tasks in parallel.
def thread_task(task):
    # Do some work here
    print("Task processed:", task)

if __name__ == '__main__':
    tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    threads = []
    for task in tasks:
        thread = threading.Thread(target=thread_task, args=(task,))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

# When working with multithreading in python, locks can be used to synchronize access to shared resources among multiple threads. A lock is an object that acts as a semaphore, allowing only one thread at a time to execute a critical section of code. The lock is released when the thread finishes executing the critical section.
def increment(counter, lock):
    for i in range(10000):
        lock.acquire()
        counter += 1
        lock.release()

if __name__ == '__main__':
    counter = 0
    lock = threading.Lock()

    threads = []
    for i in range(2):
        thread = threading.Thread(target=increment, args=(counter, lock))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

    print("Counter value:", counter)


# Harry sir- 
import time
from concurrent.futures import ThreadPoolExecutor

# Indicates some task being done
def func(seconds):
  print(f"Sleeping for {seconds} seconds")
  time.sleep(seconds)
  return seconds

def main():
  time1 = time.perf_counter()

  # Normal Code
  # func(4) 
  # func(2)
  # func(1)
 
  # Same code using Threads
  t1 = threading.Thread(target=func, args=[4])
  t2 = threading.Thread(target=func, args=[2])
  t3 = threading.Thread(target=func, args=[1])

  #Start the process
  t1.start() 
  t2.start()
  t3.start()
  
  #To wait for end the process
  t1.join() #Wait until this task is completed 
  t2.join() #Wait until this task is completed 
  t3.join() #Wait until this task is completed 

  # Calculating Time 
  time2 = time.perf_counter()
  print(time2 - time1)


def poolingDemo():
  with ThreadPoolExecutor() as executor: #Used for bulk task sheduleing
    #                           (function_Name, sleep time)
    # future1 = executor.submit(func, 3)
    # future2 = executor.submit(func, 2)
    # future3 = executor.submit(func, 4)
    # print(future1.result())
    # print(future2.result())
    # print(future3.result())
    l = [3, 5, 1, 2]
    results = executor.map(func, l)
    for result in results:
      print(result)