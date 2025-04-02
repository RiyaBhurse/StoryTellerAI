import React, { useState } from 'react';
import './Navbar.css';
import Page4 from '../pages/page4/Page4';

function Navbar({ onAdd, onNewStory, onSave, onViewSaved, showFullNavbar = false }) {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [goToPage4, setGoToPage4] = useState(false);

  const handleSave = () => {
    if (onSave) {
      onSave();
    } else {
      alert('Save not available on this page.');
    }
    setShowMoreMenu(false);
  };

  const handleViewSaved = () => {
    if (onViewSaved) {
      onViewSaved();
    } else {
      setGoToPage4(true);
    }
    setShowMoreMenu(false);
  };

  if (goToPage4) return <Page4 />;

  return (
    <nav className="navbar">
      <div className="nav-icons">
        {showFullNavbar && (
          <>
            <div className="icon-wrapper">
              <button
                className="nav-icon add-on"
                onClick={onAdd} // Simplified to directly call onAdd
                disabled={!onAdd}
              >
                ➕
              </button>
              <span className="tooltip">Add on</span>
            </div>
            <div className="icon-wrapper">
              <button
                className="nav-icon new-story"
                onClick={onNewStory || (() => alert('New Story not available on this page.'))}
                disabled={!onNewStory}
              >
                ✨
              </button>
              <span className="tooltip">New Story</span>
            </div>
          </>
        )}
        <div className="icon-wrapper">
          <button
            className="nav-icon more"
            onClick={() => setShowMoreMenu(!showMoreMenu)}
          >
            ☰
          </button>
          <span className="tooltip">More</span>
          {showMoreMenu && (
            <div className="more-dropdown">
              {showFullNavbar && <button onClick={handleSave}>🔖 Save</button>}
              <button onClick={handleViewSaved}>📜 View Saved</button>
              {showFullNavbar && <button>📤 Share</button>}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;