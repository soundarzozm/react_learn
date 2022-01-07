import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
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
            {/* <Redirect from='/profile' to='/'/> */}
            <Route path="/posts/:id" exact component={PostItem}/>
            <Route path="/posts" exact component={Post}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/" exact component={Home}/>
            <Route render={()=>(
              <h3>Oops, page not found :(</h3>
            )}/>
          </Switch>
          
        </div>

    </BrowserRouter>
  );
}

export default App;