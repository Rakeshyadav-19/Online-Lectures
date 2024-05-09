# Use the NewsAPI and the requests module to fetch the daily news related to different topics. 
# Go to: https://newsapi.org/ and explore the various options to build you application.

# 8bbbd9d569b5486a809ddf3598d97b9a

import requests
import json 

url = ('https://newsapi.org/v2/everything?'
       'country=IN&'
       'sources=bbc-news&'
       'apiKey=8bbbd9d569b5486a809ddf3598d97b9a')

# url = ('https://newsapi.org/v2/everything?'
#        'q=Apple&'
#        'from=2024-05-07&'
#        'sortBy=popularity&'
#        'apiKey=8bbbd9d569b5486a809ddf3598d97b9a')


response = requests.get(url)
result = response.json()
print(json.dumps(result, indent=4, sort_keys=True))
