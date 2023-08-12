const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
        if(message.author.bot)
            return

        if(!message.content.toLowerCase().startsWith("t!embed"))
            return
        
        if(message.author.id == "616296347556905012"){
            message.reply(`No embed for you!`)
            return
        }
        
        const update_btn = new ButtonBuilder()
        update_btn.setCustomId("update_embed")
        update_btn.setEmoji("🔃")
        update_btn.setStyle(ButtonStyle.Secondary)

        const reply_btn = new ButtonBuilder()
        reply_btn.setCustomId("send_reply")
        reply_btn.setEmoji("📨")
        reply_btn.setStyle(ButtonStyle.Primary)

        const rowOne = new ActionRowBuilder().addComponents(update_btn)
        const rowTwo = new ActionRowBuilder().addComponents(reply_btn)

        // Character img
        var char_img = "https://media.discordapp.net/attachments/1074206678540619867/1139995957983985764/chadrbanks_mario_face_wounded_unreal_engine_hd_83d44ae6-03f4-41bd-be3d-babeb4b6599f.png?width=891&height=671"

        // inside a command, event listener, etc.
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Example Title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Chad R. Banks', iconURL: 'https://www.chadrbanks.me/static/media/crb.1568ed5a.gif', url: 'https://chadrbanks.me' })
        .setDescription('Description of embed.')
        .setThumbnail(char_img)
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://media.discordapp.net/attachments/1073831718475280415/1139754494540918794/Screenshot_2023-08-11_225709.png')
        .setTimestamp()
        .setFooter({ text: 'Footer', iconURL: 'https://media.discordapp.net/attachments/1074206678540619867/1126922715077550080/chadrbanks_Pagan_symbol_cbda38d0-9398-4894-b55a-4ed291624af9.png?width=505&height=670' });

        message.reply({ embeds: [exampleEmbed], components: [rowOne, rowTwo] });
    },
};