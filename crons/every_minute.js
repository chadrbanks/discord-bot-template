const { Client, GatewayIntentBits } = require('discord.js');
// var dydb = require('../sevices/aws');
var dydb = require('../sevices/elephantsql');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
], });


module.exports = {
    name: "every_minute",
    interval: "* * * * *",
    async execute(){
        console.log("Executing every minute!");
        // console.log('data:', await dydb.getItem('hw2') );
    }
};