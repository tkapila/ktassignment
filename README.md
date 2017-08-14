
#PayPal-Slack-custom integration using webhooks. 
#What this Integration does? 
  -This integration is built to receive incoming webhooks notifications to Slack from PayPal when an event happens in PayPal.
  -This particular example is built to handle Invoice actions in PayPal. PayPal Invoice has various statuses such as 'Created', 'Paid', 'Refunded' etc. 

  #How this integration works?
  -When an Invoice in PayPal has a status of CREATE and turns to PAID (when someone Pay for the Invoice), PayPal would send a POST notification to a listener URL which is my app in Heroku(https:// mighty-oasis-64484.herokuapp.com). 
  -This app will listen to the events coming from PayPal and if the events match the ones we're looking for(Invoice PAID), it sends a notification to Slack channel through an incoming webhooks URL configured in Slack. 

 #Steps taken to deploy this integration
Installed the following: 
npm install 
npm install Requestify
npm install body-Parser
heroku create 

#Node.js express app deployed using heroku.
-Heroku creates a sample app, in this case: https://mighty-oasis-64484.herokuapp.com


#slack.js 
 
 -This file has the webhook from Slack.

#index.js 

 - This file has the code to process the incoming data from PayPal and post it to Slack. 

#package.json
 
  - This file has all the dependencies needed for a node application 
  - Include Requestify, body-Parser as dependencies

#PayPal 
  -Create a REST App in PayPal and add the webhook listener URL, in this case: https://mighty-oasis-64484.herokuapp.com for PayPal to POST the notifications to the app. 

