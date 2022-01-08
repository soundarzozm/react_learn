import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/home'
import Header from './components/header'
import PureComp from './components/pure_component'

const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <div className='container'>
        <Switch>
          <Route path='/purecomp' component={PureComp}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
