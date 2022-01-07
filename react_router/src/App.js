import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Post from './components/posts';
import Profile from './components/profile';
import Home from './components/home';

const App = () => {
  return (
    <BrowserRouter>

      <header>

        <Link to={{
          pathname: "/profile",
          hash: "#francis",
          search: "?true-enabled"
        }}>Profile</Link>
        <br/>

        <Link to="/">Home</Link>
        <br/>

        <Link to="/posts">Posts</Link>
        <br/>

        <hr/>

      </header>

        <Route path="/posts" component={Post}/>
        <Route path="/" exact component={Home}/>
        <Route path="/profile" exact component={Profile}/>
      
    </BrowserRouter>
  );
}

export default App;
