# StoryTeller - A Magical Story and Image Generator

Welcome to StoryTeller! This is a fun web app that lets you create magical stories and beautiful images just by typing a simple idea (like "A magical forest"). It uses smart AI tools to do the work for you. The project has two main parts: a frontend (where you interact with the app) built with React, and a backend (which handles the AI magic) built with Node.js. Both are hosted on Vercel, a platform that makes it easy to share your app online.

This project is like a playground for creativity! Whether you're a coder, a writer, or just someone who loves stories, you can use it, learn from it, or even help make it better.

## What Can StoryTeller Do?
- **Create Stories:** Type a prompt (e.g., "A dragon in a castle"), and the app will write a unique story for you using Google Generative AI.
- **Generate Images:** The app creates pictures to match your story using the Hugging Face API.
- **Keep Going:** Add to your story or let the app continue it with new parts, and update the image too!
- **Save and Share:** Save your stories and share the app with friends using the public link.

## How the Project is Organized
Think of this project like a big folder with two main rooms:
story-game/
├── story-game-frontend/  # The part you see and use (like a website)
│   ├── src/              # Where the code for the pages lives
│   │   ├── pages/        # Different screens of the app
│   │   │   ├── page1/    # Welcome screen
│   │   │   ├── page2/    # Where you type your idea
│   │   │   ├── page3/    # Where you see the story and image
│   │   │   ├── page4/    # Saved stories screen
│   │   │   └── page5/    # Ending screen
│   ├── public/           # Files like images and settings
│   └── package.json      # List of tools for the frontend
├── story-game-backend/   # The behind-the-scenes part
│   ├── server.js         # The brain that talks to the AI
│   └── package.json      # List of tools for the backend
├── vercel.json           # Instructions for Vercel to set it up online
└── README.md             # This file you're reading!

This setup helps keep everything organized, like a well-planned storybook!

## What You Need to Get Started
Before you can run or play with StoryTeller, make sure you have these things ready:
- **Node.js:** A program that helps run JavaScript code. Get it from [nodejs.org](https://nodejs.org/) (version 16 or higher is best).
- **Vercel CLI:** A tool to deploy your app online. Install it with: `npm install -g vercel`.
- **Google Generative AI API Key:** A special code to use Google’s AI. Sign up at [Google AI Studio](https://aistudio.google.com/) to get one.
- **Hugging Face API Token:** A code to use the image-making AI. Get it from [Hugging Face](https://huggingface.co/).

Don’t worry if this sounds tricky—I'll guide you through each step!

## How to Set Up StoryTeller on Your Computer
Let’s get StoryTeller running on your own machine step by step. It’s like building a little playground!

### 1. Get the Code
- Copy the project from GitHub to your computer:
  ```bash
  git clone <your-repo-url>
  cd story-game

  Replace <your-repo-url> with the link to your GitHub repository (e.g., https://github.com/yourusername/story-game.git).
2. Install the Tools
Go to the frontend folder and install its tools:
cd story-game-frontend
npm install

Go back and install the backend tools:
cd ../story-game-backend
npm install
This downloads everything the app needs, like Lego pieces for your project!

3. Set Up Secret Codes
The app needs special codes to talk to the AI. Create a file for these:
cd story-game-backend
touch .env
Open the .env file in a text editor and add:

GEMINI_API_KEY=your-google-generative-ai-key
HUGGING_FACE_API_TOKEN=your-hugging-face-token
Replace the your-... parts with the actual keys you got earlier. Keep this file secret!
You’ll also need to add these keys to Vercel later (see the Deployment section).

4. Start the App
Start the backend first (in one terminal):
cd story-game-backend
npm start
Open a new terminal and start the frontend:

cd story-game-frontend
npm start
Open your browser and go to http://localhost:3000. You should see the app!

How to Use StoryTeller
Here’s how to play with the app, whether locally or online:

Open it in your browser (locally at http://localhost:3000 or online at https://story-game-frontend.vercel.app/).
Click to go to /page2 (the prompt page).
Type something fun like “A magical forest with talking trees” and hit “Generate!”.
Watch the story and image appear on /page3.
Click “Continue” to add more to the story or “Add” to include your own ideas. The image will update too!
