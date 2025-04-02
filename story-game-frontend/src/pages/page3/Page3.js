import React, { useState } from 'react';
import axios from 'axios';
import './Page3.css';
import Page2 from '../page2/Page2';
import Page4 from '../page4/Page4';
import Page5 from '../page5/Page5';
import Navbar from '../../components/Navbar';

function Page3({ prompt, initialStory, initialImage }) {
  const [story, setStory] = useState(initialStory || `Once upon a time, based on "${prompt}", something magical happened...`);
  const [image, setImage] = useState(initialImage || 'https://via.placeholder.com/400x500?text=Story+Image');
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [addPrompt, setAddPrompt] = useState('');
  const [goToPage2, setGoToPage2] = useState(false);
  const [goToPage4, setGoToPage4] = useState(false);
  const [goToPage5, setGoToPage5] = useState(false);
  const [continueCount, setContinueCount] = useState(0);

  const handleAdd = async (e) => {
    e.preventDefault();
    const newStory = `${story} Then, "${addPrompt}" changed everything...`;
    setStory(newStory);
    setShowAddPopup(false);
    setAddPrompt('');

    // Generate a new image based on the added text
    try {
      const imageResponse = await axios.post('http://localhost:5000/api/generate-image', {
        prompt: `${prompt}, ${addPrompt}`, // Combine original prompt with added text
      });
      setImage(imageResponse.data.image);
    } catch (error) {
      console.error('Error generating image for Add on:', error);
      setImage('https://via.placeholder.com/400x500?text=Image+Generation+Failed');
    }
  };

  const handleContinue = async () => {
    const newCount = continueCount + 1;
    setContinueCount(newCount);

    if (newCount < 4) {
      try {
        const response = await axios.post('http://localhost:5000/api/continue-story', {
          prompt,
          currentStory: story,
          partNumber: newCount + 1,
        });
        const continuation = response.data.continuation;
        const newStory = `${story} ${continuation}`;
        setStory(newStory);

        try {
          const imageResponse = await axios.post('http://localhost:5000/api/generate-image', {
            prompt: `${prompt}, ${continuation}`, // Use the continuation as part of the new prompt
          });
          setImage(imageResponse.data.image);
        } catch (error) {
          console.error('Error generating image for Continue:', error);
          setImage('https://via.placeholder.com/400x500?text=Image+Generation+Failed');
        }
      } catch (error) {
        console.error('Error continuing story:', error);
        setStory(`${story} And then, something new happened... (Part ${newCount + 1})`);
      }
    }

    if (newCount >= 4) {
      setGoToPage5(true);
    }
  };

  const handleSave = () => {
    const savedStories = JSON.parse(localStorage.getItem('stories') || '[]');
    savedStories.push({ id: Date.now(), content: story, image: image });
    localStorage.setItem('stories', JSON.stringify(savedStories));
    alert('Story saved!');
  };

  if (goToPage2) return <Page2 />;
  if (goToPage4) return <Page4 previousPage="page3" />;
  if (goToPage5) return <Page5 />;

  return (
    <div className="page3">
      <Navbar
        onAdd={() => setShowAddPopup(true)}
        onNewStory={() => setGoToPage2(true)}
        onSave={handleSave}
        onViewSaved={() => setGoToPage4(true)}
        showFullNavbar={true}
      />
      <div className="body">
        <div className="image-section">
          <img
            src={image}
            alt="Story Visual"
            className="story-image"
          />
        </div>
        <div className="story-section">
          <p>{story}</p>
          <p>Continue clicks: {continueCount}/4</p>
        </div>
      </div>
      <div className="button-group">
        <button className="continue-btn" onClick={handleContinue}>Continue</button>
        <button className="end-btn" onClick={() => setGoToPage5(true)}>End</button>
      </div>

      {showAddPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowAddPopup(false)}>✖</button>
            <form onSubmit={handleAdd}>
              <input
                type="text"
                value={addPrompt}
                onChange={(e) => setAddPrompt(e.target.value)}
                placeholder="Add to your story"
                className="add-input"
              />
              <button type="submit" className="add-btn">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page3;