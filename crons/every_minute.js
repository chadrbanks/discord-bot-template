const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
], });

module.exports = {
    name: "every_minute",
    interval: "* * * * *",
    execute(){
        console.log("Executing every minute!");
    }
};