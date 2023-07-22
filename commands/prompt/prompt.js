// prompt.js
const {SlashCommandBuilder} = require('discord.js');
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
		)
		.addStringOption((option) =>
			option
				.setName('ratio')
				.setDescription('Aspect ratio of image')
				.setRequired(false)
				.addChoices(
					{name: '16:9', value: '--ar 16:9'},
					{name: 'Mobile', value: '--ar 9:20'},
					{name: '3:2', value: '--ar 3:2'},
					{name: '4:5', value: '--ar 4:5'},
				),
		),
	async execute(interaction) {
		// Defer the reply to give the bot mWore time to respond
		await interaction.deferReply();

		const messageContent = interaction.options.getString('prompt');
		const ratio = interaction.options.getString('ratio') || '';
		const response = await openAIHelper.search(messageContent);

		// Log the entire response object to the console
		// console.log('API response:', response.data);

		// Check if choices array exists and has at least one element
		if (response.data.choices && response.data.choices.length > 0) {
			const assistantReply = response.data.choices[0].message.content;
			await interaction.editReply(`${assistantReply} ${ratio}`); // Use editReply instead of reply
		} else {
			await interaction.editReply(
				'An error occurred while processing your request. Please try again later.',
			); // Use editReply instead of reply
		}
	},
};
