import React, { useState } from 'react';
import './Page1.css';
import Page2 from '../page2/Page2';
import Page4 from '../page4/Page4';
import Navbar from '../../components/Navbar';

function Page1() {
  const [isStarted, setIsStarted] = useState(false);
  const [goToPage4, setGoToPage4] = useState(false);

  if (isStarted) {
    return <Page2 />;
  }

  if (goToPage4) {
    return <Page4 previousPage="page1" />;
  }

  return (
    <div className="App">
      <Navbar onViewSaved={() => setGoToPage4(true)} />
      <div className="start-page">
        <button
          className="start-button"
          onClick={() => setIsStarted(true)}
        >
          Let’s Start!
        </button>
      </div>
    </div>
  );
}

export default Page1;