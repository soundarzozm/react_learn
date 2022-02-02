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
  
  render(){
    return (
      <>
        Hello World!
      </>
    )
  }
}

export default App
