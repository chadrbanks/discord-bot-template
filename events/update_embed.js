const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	once: false,
	execute(interaction) {
        if (!interaction.isButton()) return;
        if (interaction.customId != "update_embed") return;
        
        const exampleEmbed = EmbedBuilder.from(interaction.message.embeds[0])

        const roll = Math.floor(Math.random() * (5 - 1 + 1)) + 1
        switch(roll){
            case 1:
                exampleEmbed.setImage('https://media.discordapp.net/attachments/1073831718475280415/1139754494540918794/Screenshot_2023-08-11_225709.png')
                break;
            case 2:
                exampleEmbed.setImage('https://media.discordapp.net/attachments/708818444329418752/1139758737423356085/Screenshot_2023-08-11_225702.png')
                break;
            case 3:
                exampleEmbed.setImage('https://media.discordapp.net/attachments/1074206678540619867/1128861059898421358/chadrbanks_demons_attacking_unreal_engine_magical_neon_lights_2b542ee8-2618-4f0c-9ab4-10be9c86ad3f.png?width=891&height=671')
                break;
            case 4:
                exampleEmbed.setImage('https://media.discordapp.net/attachments/1074206678540619867/1139991848698531901/chadrbanks_rpg_scenes_unreal_engine_hd_89b6a360-c395-4131-b7e8-040201f7e800.png?width=891&height=671')
                break;
            default:
                exampleEmbed.setImage('https://media.discordapp.net/attachments/1074206678540619867/1139991839022264481/chadrbanks_rpg_scenes_unreal_engine_hd_ac01b4a3-db6e-49ac-9d18-fbd0606d8be3.png?width=891&height=671')
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

        console.log(`${interaction.member.user.username} updated the embed!`)
        interaction.update({ embeds: [exampleEmbed], components: [rowOne, rowTwo] })
    },
};