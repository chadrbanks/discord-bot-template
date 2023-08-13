const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
        console.log(`${interaction.member.user.username} ran the ping command!`)
		await interaction.reply('Pong!');
	},
};
