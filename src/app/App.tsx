import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/App.css';

import Navbar from './components/Navbar';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Projects from '../pages/projects/projects';
import Blog from '../pages/blog/blog';


function App() {
  console.log(window.location)

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>
        </header>
      </div>
    </Router>
  );

  return (
    <div className="App">
      <header className="App-header">
        <>
          <Navbar /> 
          {/* <Component /> */}
        </>
      </header>
    </div>
  );
}

export default App;

/* 
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

// action="#" prevents redirects
  const login = (
    <form action="#" onSubmit={handleSubmit}>
    <input type="password" placeholder="password" />
    <input type="submit" / >
    </form>
  );

  const contactInfo = (
    <ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>
  );
*/