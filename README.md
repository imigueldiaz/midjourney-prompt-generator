# midjourney-prompt-generator

midjourney-prompt-generator is a Discord bot that uses the OpenAI GPT-3 API to generate prompts for MidJourney AI image generation.

## Usage 

The bot has one slash command:

`/prompt`

This command takes the following options:

- `prompt` - The natural language prompt to generate an image for
- `ratio` (optional) - The aspect ratio for the generated image. Options are `--ar 16:9`, `--ar 9:20`, `--ar 3:2`, `--ar 4:5`  
- `choices` (optional) - The number of prompt choices to generate, between 1-5

For example:

`/prompt "A cute puppy sitting in a field of flowers" --ar 3:2`

This will generate a prompt like:

```
A cute puppy sitting in a field of flowers --ar 3:2
```

The bot uses the OpenAI API to generate multiple prompt choices and returns them formatted for use with MidJourney.

## Installation

1. Clone the repository

```
git clone https://github.com/imigueldiaz/midjourney-prompt-generator.git
```

2. Install dependencies

```
npm install
```

3. Create a `.env` file with your [OpenAI API key](https://openai.com/api/)

```
OPENAI_API_KEY=sk-... 
```

4. Run the bot

```
npm start
```

5. Add the bot to your Discord server

## Credits

- [OpenAI](https://openai.com/) for the GPT-3 API
- [MidJourney](https://www.midjourney.com/) for the AI image generation  
- [Discord.js](https://discord.js.org/) for the Discord bot framework

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.
