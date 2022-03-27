import React from 'react';
import './App.css';
import Home from './pages/Home';
import Redirection from './utils/Redirection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/*
            <Route path="/travel" exact element={<Travel />} />
            <Route path="/tech" exact element={<Tech />} />
            <Route path="/music" exact element={<Music />} />
            */}

            <Route path="/external/adrieltheexplorer" exact
              element = {<Redirection
                href="https://adrieltheexplorer.com/" />} />

            <Route path="/external/instagram" exact 
              element={<Redirection
                href="https://www.instagram.com/adriel.explorer/" />} />
            <Route path="/external/youtube" exact 
              element={<Redirection
                href="https://www.youtube.com/channel/UCVZrlt404mg5zp2gq8Qi4Zg" />} />
            <Route path="/external/linkedin" exact 
              element={<Redirection
                href="https://www.linkedin.com/in/keitsun-adriel-yeung/" />} />
            <Route path="/external/github" exact 
              element={<Redirection
                href="https://github.com/adrielyeung" />} />
          </Routes>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;