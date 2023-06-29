import { BrowserRouter as Router} from 'react-router-dom';
import React, { useState } from 'react'
import './App.css';

import NavBar from './Components/Nav_Bar/NavBar'
import Body from './Components/Body/Body';
import About from './Components/About/about';

import Services from './Components/Services/Services';
import service from './Components/Services/serviceapi';
import RecentFinishes from './Components/RecentFinishes/RecentFinishes';
import ContactUs from './Components/Contact/contact';

function App() {
  const [serviceData] = useState(service);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Body />
        <About />
        <Services serviceData={serviceData} />
        <RecentFinishes/>
        <ContactUs />
      </Router>
    </div>
  );
}

export default App;
