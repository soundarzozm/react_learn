import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// MemoryRouter, HashRouter

import Header from './components/header';
import Home from './components/home';
import Post from './components/posts';
import PostItem from './components/post_item';
import Profile from './components/profile';

const App = () => {
  return (
    <BrowserRouter>
        
        <Header/>
        
        <div className="container">
          <Switch>
            <Route path="/posts/:id" exact component={PostItem}/>
            <Route path="/posts" exact component={Post}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/" exact component={Home}/>
          </Switch>
          
        </div>

    </BrowserRouter>
  );
}

export default App;