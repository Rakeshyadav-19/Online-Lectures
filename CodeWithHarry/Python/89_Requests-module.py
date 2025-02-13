# Requests module is an HTTP library that enables developers to send HTTP requests in Python, enables you to send HTTP requests using Python code and makes it possible to interact with APIs and web services.

import requests

# Get Request
response = requests.get("https://www.google.com")
print(response.text)
print('\n')

# Post Request
url = "https://jsonplaceholder.typicode.com/posts"
data = {
    "title": 'Rax',
    "body": 'Lord',
    "userId": 12,
  }
headers =  {
    'Content-type': 'application/json; charset=UTF-8',
  }
response = requests.post(url, headers=headers, json=data)
print(response.text)
print('\n')



# E.G -
from bs4 import BeautifulSoup

url = "https://www.codewithharry.com/blogpost/django-cheatsheet/"
r = requests.get(url)

soup = BeautifulSoup(r.text, 'html.parser')
print(soup.prettify())

for heading in soup.find_all("h2"):
  print(heading.text)

