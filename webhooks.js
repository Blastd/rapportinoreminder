const { WebhookClient } = require('discord.js');
var cron = require('node-cron');

class WebhookRapportino{
    constructor(id, token){
        const myHook = new WebhookClient({id, token});

        cron.schedule('0 16 * * MON-FRI', () => {
            myHook.send('IL RAPPORTINO !!!');
          }, {
            scheduled: true,
            timezone: "Europe/Rome"
          });          
    }
}

module.exports = {WebhookRapportino}