# Evaluate A News Article with Natural Language Processing


This project is for building a web app that allows users to run Natural Language Processing (NLP) on articles or blogs from other websites.  When a user submits url link, the web app  dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.


## How to run the project

 [Meaning Cloud](https://www.meaningcloud.com) API key needs to run the project. 

 The key to be added in the .env file (The file purposily left empty for adding the KEY)
 

Steps to run the project.

Go to the root folder,  

1. add .env file in the root with a valid API_KEY
2. enter "npm install" in the terminal to install dependencies
3. open multiple terminals
4. enter "npm run build-prod"  on one terminal,  then "npm start"  Production mode
5. enter "npm run build-dev"  to open developer mode in the other terminal.  Dev mode port is 8081
6. open internet browser and enter "localhost:8080" and paste article link in the placeholder to run sentiment analisys.

7. Open browser at http://localhost:8080/

***For testing
1. npm test 
from developer mode

*** Build Tools
HTML, CSS, Javascript, Node JS, Webpack, Express, Workbox, 

*** Installation
Make sure Node and npm are installed from the terminal.
'''
node -v (16.14.1)
npm -v  (8.7.0)
```



