const webhook = 'https://hooks.slack.com/services/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',
      requestify = require('requestify');

 exports.sendMessage = function(message) {

        requestify.post(webhook, message);

 }      