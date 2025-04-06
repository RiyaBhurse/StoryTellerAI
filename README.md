S# StoryTeller - A Magical Story and Image Generator

Welcome to StoryTeller! This is a fun and creative web app that lets you create magical stories and stunning images just by typing a simple idea, like "A magical forest with talking trees." It uses smart artificial intelligence (AI) tools to bring your imagination to life. The project has two main parts: a **frontend** (the part you see and use, built with React) and a **backend** (the behind-the-scenes magic, built with Node.js). It’s like your own digital storybook where you’re the author!

Whether you’re a coder, a writer, an artist, or just someone who loves a good tale, StoryTeller is for you. You can run it on your own computer, explore how it works, or even help make it better by adding your own ideas!

## What Can StoryTeller Do?
StoryTeller is packed with exciting features to spark your creativity:
- **Create Stories:** Type a prompt (e.g., "A dragon guarding a treasure") and watch the app write a unique story using Google Generative AI.
- **Generate Images:** Get a picture to match your story, created by the Hugging Face AI.
- **Keep the Story Going:** Add your own ideas with the "Add" button or let the app continue the story with "Continue," and see the image update too!
- **Save Your Work:** Save your favorite stories to enjoy later or share them with friends.

## How the Project is Organized
Imagine StoryTeller like a big toy box with two special sections to keep everything tidy:
![image](https://github.com/user-attachments/assets/358559df-23ff-4784-8882-5b024cb83778)



This setup keeps everything organized, like chapters in a well-planned book!

## What You Need to Get Started
Before you can play with StoryTeller on your own computer, let’s gather a few things:
- **Node.js:** A program that runs JavaScript code. Download it from [nodejs.org](https://nodejs.org/) and install version 16 or higher. (To check, open your terminal and type `node -v`. If it shows a version number, you’re set!)
- **Google Generative AI API Key:** A special passcode to use Google’s AI for stories. Sign up for free at [Google AI Studio](https://aistudio.google.com/) to get one.
- **Hugging Face API Token:** A code to use the image-making AI. Create an account at [Hugging Face](https://huggingface.co/) to get your token.
- **A Text Editor:** A program to edit code, like Visual Studio Code (free at [code.visualstudio.com](https://code.visualstudio.com/)), Notepad++, or any text editor you like.
- **Terminal:** A command-line tool to run instructions. On Windows, use Command Prompt or PowerShell; on Mac or Linux, use Terminal.

Don’t worry if this feels new—I’ll guide you through every step with easy instructions!

## How to Set Up StoryTeller on Your Computer
Let’s get StoryTeller running on your own machine. It’s like building your own playground—fun and simple! Follow these steps one by one:

### 1. Get the Code
- Copy the project from GitHub to your computer:
  ```bash
  git clone <your-repo-url>
  cd story-game
Replace <your-repo-url> with your GitHub link (e.g., https://github.com/yourusername/story-game.git). If you don’t have Git, download it for free from git-scm.com.
Tip: If git clone doesn’t work, you can download the project as a ZIP file from GitHub and unzip it.
2. Install the Tools
Move to the frontend folder and download its tools:

cd story-game-frontend
npm install
This grabs all the pieces the frontend needs, like building blocks! If npm says “command not found,” make sure Node.js is installed correctly.
Go back to the backend folder and download its tools:

cd ../story-game-backend
npm install
npm is a helper that comes with Node.js. It might take a minute to finish.
3. Set Up Secret Codes
The app needs special keys to talk to the AI. Let’s create a safe spot for them:

Go to the backend folder:

cd story-game-backend
Make a new file called .env:

touch .env
Open .env in your text editor and add these lines:

GEMINI_API_KEY=your-google-generative-ai-key
HUGGING_FACE_API_TOKEN=your-hugging-face-token
Replace your-google-generative-ai-key with the key from Google AI Studio, and your-hugging-face-token with the token from Hugging Face. Be careful not to share this file with others!
Tip: Save the file after editing, and keep it in the story-game-backend folder.
4. Start the App
Start the backend in one terminal window:

cd story-game-backend
npm start
You should see a message like “Server running on port 5000.” If you get an error, check that the .env file has the right keys.
Open a second terminal window and start the frontend:

cd story-game-frontend
npm start
This will open a browser window at http://localhost:3000 automatically. If it doesn’t, type that address manually.
What to Expect: You’ll see the welcome screen (page1)! If something goes wrong (e.g., errors in the terminal), let me know, and we’ll fix it together.
How to Use StoryTeller
Now that it’s running, here’s how to have fun with it on your computer:

Open your browser to http://localhost:3000 (the address shown when you start the frontend).
Click to go to /page2 (look for the screen where you can type).
Type a fun idea, like “A pirate ship in a stormy sea with a singing parrot,” and click “Generate!”.
Watch your story and image show up on /page3.
Click “Continue” to let the app add more to the story, or click “Add” to type your own twist. The image will change to match!
Fun Idea: Try crazy prompts like “A dancing dinosaur on the moon” to see what the AI comes up with!
Tools We Used to Build This
Here’s what we used to make StoryTeller:

Frontend: React (makes the app interactive and pretty), Axios (helps the frontend talk to the backend).
Backend: Node.js and Express (handles the requests and talks to the AI).
AI Helpers: Google Generative AI (gemini-1.5-flash) for writing stories, Hugging Face for creating images.
Things to Know
You might see a manifest.json 401 error in your browser’s developer tools (press F12 to check). This is about making the app installable like a phone app, but it won’t stop you from enjoying the stories and images. We can work on fixing it later if you’d like!
Join the Fun!
Love StoryTeller? Want to add your own magic? Here’s how to get involved:

Fork It: Click the “Fork” button on the GitHub page to make your own copy of the project.
Make Changes: Open a new branch by typing git checkout -b my-new-feature in your terminal, then edit the code to add your ideas.
Share It: Send a “pull request” on GitHub to show us your work. We’d love to see what you create!
