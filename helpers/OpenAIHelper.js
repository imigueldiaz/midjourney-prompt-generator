// OpenAIHelper.js
const fs = require('fs');
const {Configuration, OpenAIApi} = require('openai');

class OpenAIHelper {
	static systemMessage = fs.readFileSync('system.txt', 'utf-8');

	constructor(apiKey) {
		this.configuration = new Configuration({apiKey});
		this.openai = new OpenAIApi(this.configuration);
	}

	async search(userMessage, choices) {
		const response = await this.openai.createChatCompletion({
			model: 'gpt-3.5-turbo-0613',
			messages: [
				{role: 'system', content: OpenAIHelper.systemMessage},
				{role: 'user', content: userMessage},
			],
			temperature: 0.16,
			max_tokens: 120,
			frequency_penalty: 0.1,
			presence_penalty: 0.1,
			n: choices,
		});

		return response;
	}
}

module.exports = OpenAIHelper;
