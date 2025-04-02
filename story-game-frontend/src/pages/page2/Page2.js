import React, { useState } from 'react';
import axios from 'axios';
import './Page2.css';
import Page3 from '../page3/Page3';
import Page4 from '../page4/Page4';
import Navbar from '../../components/Navbar';
import Image from '/home/riya/Desktop/ICP/StoryTeller/story-game/story-game-frontend/src/image.png';
function Page2() {
    const [prompt, setPrompt] = useState('');
    const [isGenerated, setIsGenerated] = useState(false);
    const [goToPage4, setGoToPage4] = useState(false);
    const [generatedStory, setGeneratedStory] = useState('');
    const [generatedImage, setGeneratedImage] = useState('');
  
    const handleGenerate = async (e) => {
      e.preventDefault();
      try {
        // Generate the story
        const storyResponse = await axios.post('http://localhost:5000/api/generate-story', { prompt });
        setGeneratedStory(storyResponse.data.story);
  
        // Generate the image
        const imageResponse = await axios.post('http://localhost:5000/api/generate-image', { prompt });
        setGeneratedImage(imageResponse.data.image);
  
        setIsGenerated(true);
      } catch (error) {
        console.error('Error generating story or image:', error);
        alert('Failed to generate story or image. Please try again.');
      }
    };
  
    if (isGenerated) {
      return <Page3 prompt={prompt} initialStory={generatedStory} initialImage={generatedImage} />;
    }
  
    if (goToPage4) {
      return <Page4 previousPage="page2" />;
    }
  
    return (
      <div className="page2">
        <Navbar onViewSaved={() => setGoToPage4(true)} />
        <div className="content">
          <img
            src={Image}
            alt="Story Visual"
            className="center-image"
          />
          <form onSubmit={handleGenerate} className="prompt-form">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your story context"
              className="prompt-input"
            />
            <button type="submit" className="generate-btn">
              Generate!
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Page2;