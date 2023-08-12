const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
        if(message.author.bot)
            return

        if(!message.content.toLowerCase().startsWith("c!help"))
            return
        
        if(message.author.id == "616296347556905012"){
            message.reply(`There is no helping you!`)
            return
        }
        
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

        // inside a command, event listener, etc.
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .setThumbnail('https://media.discordapp.net/attachments/708818444329418752/1139755108813525082/Screenshot_2023-08-11_225941.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://media.discordapp.net/attachments/1073831718475280415/1139754494540918794/Screenshot_2023-08-11_225709.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        message.reply({ embeds: [exampleEmbed], components: [rowOne, rowTwo] });
    },
};