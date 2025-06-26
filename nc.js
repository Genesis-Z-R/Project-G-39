const fs = require('fs');
const readline = require('readline');
const axios = require('axios');

// Template for the conversation
const template = (context, question) => `
Answer the question below

Here is the conversation history: ${context}
question: ${question}
Answer:
`;

// Ollama API configuration
const OLLAMA_URL = 'http://localhost:11434/api/generate';
const MODEL_NAME = 'llama3.2';

async function callOllama(prompt) {
    try {
        const response = await axios.post(OLLAMA_URL, {
            model: MODEL_NAME,
            prompt: prompt,
            stream: false
        });
        
        return response.data.response;
    } catch (error) {
        throw new Error(`Ollama API error: ${error.message}`);
    }
}

async function main() {
    const fileStream = fs.createReadStream('facts.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        if (line.trim() === '') continue;

        const prompt = `
You are a fact-checking assistant.

Fact: ${line}

Your task:
- Determine if the statement is true or false.
- Explain your reasoning.
- Provide any known sources or references if applicable.

Answer:
`;

        try {
            const result = await callOllama(prompt);
            console.log("Reading:", line); 

             console.log(`\n🧠 Fact: ${line}\n${result}`);
        } catch (error) {
            console.error("Error:", error.message);
        }
    }
}

// Start the conversation if this file is run directly
if (require.main === module) {
    main();
}