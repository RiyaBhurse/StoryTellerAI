import React, { useState } from 'react';
import './Page5.css';
import Page4 from '../page4/Page4';
import Navbar from '../../components/Navbar';

function Page5() {
  const [goToPage4, setGoToPage4] = useState(false);

  if (goToPage4) return <Page4 previousPage="page5" />;

  return (
    <div className="page5">
      <Navbar onViewSaved={() => setGoToPage4(true)} />
      <h1>The End</h1>
      <p>Thanks for playing! Your story has concluded.</p>
    </div>
  );
}

export default Page5;