import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';

const App = () => {
  return (
    <BrowserRouter>
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 
          px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to="/">Home</Link> -
              <Link className="p-2 text-dark" to="/posts">Posts</Link> - 
              <Link className="p-2 text-dark" to={{
                pathname:'/profile',
                hash:'#francis',
                search:'?true=enabled'
              }}>Profile</Link>
            </nav>
          </div>
        </header>
        <div className="container">
          <Route path="/" exact component={Home}/>
          <Route path="/posts" exact component={Post}/>
          <Route path="/profile" exact component={Profile}/>
        </div>
    </BrowserRouter>
  );
}

export default App;