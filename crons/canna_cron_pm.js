const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
], });

module.exports = {
    name: "canna_cron_pm",
    interval: "20 16 * * *",
    execute(){
        console.log("4:20!");
    }
};