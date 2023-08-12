const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	once: false,
	execute(interaction) {
 
        if(!interaction.isButton())
         return

        if(interaction.customId != "equipment")
            return
        
        interaction.reply("You rolled a 1!");
    },
};