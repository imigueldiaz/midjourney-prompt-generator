// prompt.js
const {SlashCommandBuilder} = require('@discordjs/builders');
const {codeBlock} = require('@discordjs/formatters');
const OpenAIHelper = require('../../helpers/OpenAIHelper');

const openAIHelper = new OpenAIHelper(process.env.OPENAI_API_KEY);

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
		// Defer the reply to give the bot more time to respond
		await interaction.deferReply();

		const messageContent = interaction.options.getString('prompt');
		const response = await openAIHelper.search(messageContent);

		// Log the entire response object to the console
		console.log('API response:', response.data);

		// Check if choices array exists and has at least one element
		if (response.data.choices && response.data.choices.length > 0) {
			const assistantReply = response.data.choices[0].message.content;
			await interaction.editReply(`${codeBlock(assistantReply)}`); // Use editReply instead of reply
		} else {
			await interaction.editReply(
				'An error occurred while processing your request. Please try again later.',
			); // Use editReply instead of reply
		}
	},
};
