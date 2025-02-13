# Asynchronous I/O, or async for short, is a programming pattern that allows for high-performance I/O operations in a concurrent and non-blocking manner.

# syntax for creating an asynchronous function:
import asyncio
import requests

async def my_async_function():
    # asynchronous code here
    await asyncio.sleep(1)
    return "Hello, Async World!"

async def main():
    result = await my_async_function() # await is used to...wait for untill the function is executed and tehn go next
    print(result)

asyncio.run(main())

# Another way to schedule tasks concurrently:
async def eg():
    L = await asyncio.gather(  # to run functions parallaly
        my_async_function(),
        my_async_function(),
        my_async_function(),
    )
    print(L)
asyncio.run(eg())


# E.G
async def function1():
  print("func 1") 
  URL = "https://wallpaperaccess.in/public/uploads/preview/1920x1200-desktop-background-ultra-hd-wallpaper-wiki-desktop-wallpaper-4k-.jpg"
  response = requests.get(URL)
  open("instagram.ico", "wb").write(response.content)
   
  return "Harry"
  
async def function2():
  print("func 2") 
  URL = "https://p4.wallpaperbetter.com/wallpaper/490/433/199/nature-2560x1440-tree-snow-wallpaper-preview.jpg"
  response = requests.get(URL)
  open("instagram2.jpg", "wb").write(response.content)
  
async def function3():
  print("func 3")
  URL = "https://c4.wallpaperflare.com/wallpaper/622/676/943/3d-hd-wikipedia-3d-wallpaper-preview.jpg"
  response = requests.get(URL)
  open("instagram3.ico", "wb").write(response.content)

  # task = asyncio.create_task(function1())  - whenever he gets time he executes it

asyncio.run(main())