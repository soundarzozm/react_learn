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
  
  onSubmitCar(){
    axios.post('/api/addcar', {
      brand: 'Maruti Suzuki',
      model: 'WagonR Duo',
      year: 2009,
      avail: false
    })
    .then(response=>{
      console.log(response.data)
    })
  }

  render(){
    return (
      <div className='App'>
        <button
          onClick = {()=>this.onSubmitCar()}
        >
          Add user
        </button>
      </div>
    )
  }
}

export default App
