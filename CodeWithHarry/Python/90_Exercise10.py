# Use the NewsAPI and the requests module to fetch the daily news related to different topics. 
# Go to: https://newsapi.org/ and explore the various options to build you application.

# 8bbbd9d569b5486a809ddf3598d97b9a

import requests
import json 
import datetime


# To search the news by topic
def topic():
     print("Select one of Topic from below: \n")
     print("1.business\n2.entertainment\n3.general\n4.health\n5.science\n6.sports\n7.technology")
     print("0 - Exit")
     topic = int(input("[NUMBER ONLY]Select one of the Topic for the news:- "))

     arr = ['business', 'entertainment', 'generalhealth', 'science', 'sports', 'technology']

     return arr[(topic-1)]

num = 1
while(num != 0):
       url = (f'https://newsapi.org/v2/top-headlines?'
              'from=2024-04-28&'
              f'category={topic()}&'
              'apiKey=8bbbd9d569b5486a809ddf3598d97b9a')
      
       response = requests.get(url)
       result = response.json()
       print(json.dumps(result, indent=4, sort_keys=True))


# Harry -
query = input("What type of news are you interested in? ")
url = (f'https://newsapi.org/v2/everything?q={query}&'
       'from=2023-01-28&'
       'sortBy=publishedAt&'
       'apiKey=dbe57b028aeb41e285a226a94865f7a7')
r = requests.get(url)
news = json.loads(r.text)
# print(news, type(news))
for article in news["articles"]:
  print(article["title"])
  print(article["description"])
  print("--------------------------------------")