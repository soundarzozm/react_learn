import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  
  // componentDidMount(){

  //   //cannot use full url with port also because CORS error
  //   //fix -> 1) allow CORS in server
  //   //       2) use proxy (check package.json)
  //   axios.get('/api/users')
  //   .then(response=>{
  //     console.log(response.data)
  //   })
  // }
  
  addUser(){
    axios.get('/api/users')
    .then(response=>{
      console.log(response.data)
    }).catch(()=>{
      console.log('crap')
    })
  }

  render(){
    return (
      <div className='App'>
        <button
          onClick = {()=>this.addUser()}
        >
          Add user
        </button>
      </div>
    )
  }
}

export default App
