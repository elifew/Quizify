import React, { useState } from 'react';

const OpenAIComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const generateTagline = async () => {
    try {
      const apiKey = "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";
      const endpoint = "https://api.openai.com/v1/completions";

      // Make the API call using Fetch API
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo-instruct',
          prompt: prompt,
          max_tokens: 700, // Optional: Limit the length of the response
          temperature: 0.7, // Optional: Controls creativity (0.0: deterministic, 1.0: more creative)
          n: 1, // Number of completions to generate (1 in this case)
        })
      });

      // Check if the response is successful
      if (response.ok) {
        const completion = await response.json();
        setResponse(completion.choices[0].text.trim());
      } else {
        console.error("API call failed with status:", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt"
      />
      <button onClick={generateTagline}>Generate Tagline</button>
      <div>{response}</div>
    </div>
  );
};

export default OpenAIComponent;
