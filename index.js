
var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
bodyParser = require('body-parser'),
slack = require('./slack.js');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());

function processRequest(request, response) { 
  if (request.body.event_type == 'INVOICING.INVOICE.PAID') {
  	slackMessageObj = new Object();
    slackMessageObj.invoice_amount = request.body.resource.total_amount.value;
    slackMessageObj.invoice_number = request.body.resource.number;
    var slackInvoiceDetailsMsg = JSON.stringify(slackMessageObj);
    slack.sendMessage({
	    "text":  "Notification from PayPal",
		"attachments": [
            {
                 "text": "PayPal Invoice PAID: " + slackInvoiceDetailsMsg,
			     "color": "#00FF00"		
            }
         ]
	});
  }
  response.sendStatus(200);	
}

app.post('/', function(request, response){
  processRequest(request, response);
});


app.get('/', function(request, response){
  processRequest(request, response);	
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
