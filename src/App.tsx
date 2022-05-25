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
      <FaqHeading />
    </div>
  );
}

export default App;
