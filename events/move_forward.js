const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	once: false,
	execute(interaction) {
 
        if(!interaction.isButton())
         return

        if(interaction.customId != "move_forward")
            return
        
        const exampleEmbed = EmbedBuilder.from(interaction.message.embeds[0])
        exampleEmbed.setImage('https://media.discordapp.net/attachments/708818444329418752/1139758737423356085/Screenshot_2023-08-11_225702.png')
        
        const equipment = new ButtonBuilder()
        equipment.setCustomId("equipment")
        equipment.setEmoji("🔪")
        equipment.setStyle(ButtonStyle.Danger)

        const move = new ButtonBuilder()
        move.setCustomId("move_forward")
        move.setEmoji("🔼")
        move.setStyle(ButtonStyle.Secondary)

        const rowOne = new ActionRowBuilder().addComponents(equipment)
        const rowTwo = new ActionRowBuilder().addComponents(move)
        interaction.update({ embeds: [exampleEmbed], components: [rowOne, rowTwo] })
    },
};