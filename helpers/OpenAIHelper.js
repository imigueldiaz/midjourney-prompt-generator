const fs = require('fs');
const OpenAI = require('openai');

class OpenAIHelper {
    static systemMessage = fs.readFileSync('system.txt', 'utf-8');

    constructor(apiKey) {
        this.openai = new OpenAI({ apiKey: apiKey });
    }

    async search(userMessage, choices) {
        const response = await this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo-1106',
            messages: [
                { role: 'system', content: OpenAIHelper.systemMessage },
                { role: 'user', content: userMessage },
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
