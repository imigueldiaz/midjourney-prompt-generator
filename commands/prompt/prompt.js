const {SlashCommandBuilder} = require('@discordjs/builders');
const path = require('path');
const {codeBlock} = require('@discordjs/formatters');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prompt')
		.setDescription('Generates a prompt')
		.addStringOption((option) =>
			option
				.setName('prompt')
				.setDescription('Natural language search')
				.setRequired(true),
		),
	async execute(interaction) {
		const messageContent = interaction.options.getString('prompt');
		const combinedContent = `Follow the info on site: https://www.aiexperiments.org/instructions.txt and give me a prompt for ${messageContent}`;
		await interaction.reply(`${codeBlock(combinedContent)}`);
	},
};
