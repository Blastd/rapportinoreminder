const { WebhookClient } = require('discord.js');
const { Cron } = require('croner');

class WebhookRapportino{
    constructor(id, token){
        const myHook = new WebhookClient({id, token});

        const job = Cron('0 16 * * MON-FRI', { timezone: "Europe/Rome" }, 
          () => { myHook.send('IL RAPPORTINO !!!'); });          
    }
}

module.exports = {WebhookRapportino}