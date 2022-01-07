import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
// MemoryRouter, HashRouter

import Home from './components/home';
import Post from './components/posts';
import PostItem from './components/post_item';
import Profile from './components/profile';

const App = () => {
  return (
    <BrowserRouter>
        <header>
          
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            
            <h5 className="my-0 mr-md-auto font-weight-normal">
              Company name
            </h5>
            
            <nav className="my-2 my-md-0 mr-md-3">
              
              <NavLink className="p-2" activeStyle={{color: 'red'}} activeClassName='selected' exact to="/">Home</NavLink> -
              
              <NavLink className="p-2" activeStyle={{color: 'red'}} activeClassName='selected' to="/posts">Posts</NavLink> - 
              
              <NavLink className="p-2" activeStyle={{color: 'red'}} activeClassName='selected' to={{
                pathname:'/profile',
                hash:'#francis',
                search:'?true=enabled'
              }}>Profile</NavLink>

            </nav>
          
          </div>
        
        </header>
        
        <div className="container">
          <Route path="/" exact component={Home}/>
          <Route path="/posts" exact component={Post}/>
          <Route path="/posts/:id" exact component={PostItem}/>
          <Route path="/profile" exact component={Profile}/>
        </div>

    </BrowserRouter>
  );
}

export default App;