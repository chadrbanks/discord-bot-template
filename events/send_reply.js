const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	once: false,
	execute(interaction) {
        if (!interaction.isButton()) return;
        if (interaction.customId != "send_reply") return;
        
        console.log(`${interaction.member.nickname} clicked the button!`)
        interaction.reply(`${interaction.member.nickname} clicked the button!`)
    },
};