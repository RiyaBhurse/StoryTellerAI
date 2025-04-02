import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './Page4.css';
import Page1 from '../page1/Page1';
import Page2 from '../page2/Page2';
import Page3 from '../page3/Page3';
import Page5 from '../page5/Page5';

function Page4({ previousPage = 'page1' }) {
  const [goBack, setGoBack] = useState(false);
  const savedStories = JSON.parse(localStorage.getItem('stories') || '[]');

  const handleDownload = (story) => {
    const doc = new jsPDF();
    doc.text(story, 10, 10);
    doc.save(`story-${Date.now()}.pdf`);
  };

  const handleShare = (story) => {
    navigator.clipboard.writeText(story);
    alert('Story copied to clipboard!');
  };

  const handleUnsave = (id) => {
    const updatedStories = savedStories.filter((s) => s.id !== id);
    localStorage.setItem('stories', JSON.stringify(updatedStories));
    window.location.reload();
  };

  if (goBack) {
    switch (previousPage) {
      case 'page1':
        return <Page1 />;
      case 'page2':
        return <Page2 />;
      case 'page3':
        return <Page3 />;
      case 'page5':
        return <Page5 />;
      default:
        return <Page1 />;
    }
  }

  return (
    <div className="page4">
      <button className="back-btn" onClick={() => setGoBack(true)}>
        ⬅️ Back
      </button>
      <h1>Saved Stories</h1>
      <div className="tiles">
        {savedStories.length === 0 ? (
          <p>No saved stories yet!</p>
        ) : (
          savedStories.map((story) => (
            <div key={story.id} className="tile">
              {story.image && (
                <img
                  src={story.image}
                  alt="Story Visual"
                  className="tile-image"
                  style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }}
                />
              )}
              <p>{story.content.substring(0, 100)}...</p>
              <div className="tile-actions">
                <button onClick={() => handleDownload(story.content)}>📥 Download</button>
                <button onClick={() => handleShare(story.content)}>📤 Share</button>
                <button onClick={() => handleUnsave(story.id)}>🗑️ Unsave</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Page4;