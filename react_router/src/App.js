import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Post from './components/posts';
import Profile from './components/profile';
import Home from './components/home';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/profile">Profile</Link>
      </header>
      <Routes>
        <Route path="/posts" element={<Post/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
