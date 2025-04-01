const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' }); // Replace with your fine-tuned model ID if available

// API endpoint to generate a new story
app.post('/api/generate-story', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const generationConfig = {
      maxOutputTokens: 150,
      temperature: 0.7,
    };

    const result = await model.generateContent(
      `You are a creative storyteller. Generate a short, engaging story (3-5 sentences) based on the following prompt: "${prompt}"`,
      generationConfig
    );

    const story = result.response.text();
    res.json({ story });
  } catch (error) {
    console.error('Error generating story:', error);
    res.status(500).json({ error: 'Failed to generate story' });
  }
});

// API endpoint to continue an existing story
app.post('/api/continue-story', async (req, res) => {
  const { prompt, currentStory, partNumber } = req.body;

  if (!prompt || !currentStory) {
    return res.status(400).json({ error: 'Prompt and current story are required' });
  }

  try {
    const generationConfig = {
      maxOutputTokens: 100,
      temperature: 0.7,
    };

    const result = await model.generateContent(
      `You are a creative storyteller. Continue this story (add 2-3 sentences) in a coherent and engaging way, maintaining the tone and style. The original prompt was: "${prompt}". The current story is: "${currentStory}". This is part ${partNumber} of the story.`,
      generationConfig
    );

    const continuation = result.response.text();
    res.json({ continuation });
  } catch (error) {
    console.error('Error continuing story:', error);
    res.status(500).json({ error: 'Failed to continue story' });
  }
});

// API endpoint to generate an image based on the prompt
app.post('/api/generate-image', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5',
        { inputs: `A detailed illustration of ${prompt}, fantasy style, vibrant colors` },
        {
          headers: {
            Authorization: `Bearer ${process.env.HUGGING_FACE_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          responseType: 'arraybuffer',
        }
      );

      const base64Image = Buffer.from(response.data, 'binary').toString('base64');
      const imageDataUrl = `data:image/png;base64,${base64Image}`;
      return res.json({ image: imageDataUrl });
    } catch (error) {
      if (error.response && error.response.status === 503) {
        attempt++;
        console.warn(`Attempt ${attempt}/${maxRetries}: 503 error, retrying...`);
        if (attempt === maxRetries) {
          console.error('Max retries reached for image generation:', error);
          return res.json({ image: 'https://via.placeholder.com/400x500?text=Image+Generation+Failed' });
        }
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds before retrying
      } else {
        console.error('Error generating image:', error);
        return res.json({ image: 'https://via.placeholder.com/400x500?text=Image+Generation+Failed' });
      }
    }
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});