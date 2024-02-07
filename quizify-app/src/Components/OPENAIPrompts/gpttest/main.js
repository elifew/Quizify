import OpenAI from "openai";

const openai = new OpenAI();

const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Write a tagline for an ice cream shop.'
});
//setx OPENAI_API_KEY "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"
