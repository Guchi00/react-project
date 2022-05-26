import React from 'react';
import './App.css';
import Linking from './components/linking/Linking';
import UsersPosts from './components/usersposts/UsersPosts';
import Activities from "./components/activities/Activities";
import FaqHeading from "./components/faqheading/FaqHeading";


function App() {
  return (
    <div className="App">
      <Linking />
      <UsersPosts />
      <h4 className='textActivity'>Activity</h4>
      <Activities />
      <div className="faqHeadingsCon">
        <span className="firstItem">Frenquently Asked Questions</span>
        <span className="secondItem">
          Frenquently asked questions and supporting answers regarding your
          services are displayed here
        </span>
        <span className="paralleLine"></span>
      </div>
      <FaqHeading />
    </div>
  );
}

export default App;
