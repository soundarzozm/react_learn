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
  
  state = {
    cars: []
  }

  componentDidMount(){
    this.getCars()
  }

  getCars(){
    axios.get('/api/getcars')
    .then(response=>{
      this.setState({
        cars: response.data
      })
    })
  }

  onCarRemove(){
    axios.post('/api/removecar', {
      brand: 'Ford'
    })
    .then(response=>{
      this.getCars()
    })
  }

  onSubmitCar(){
    axios.post('/api/addcar', {
      brand: 'Honda',
      model: 'Civic',
      year: 2007,
      avail: false
    })
    .then(response=>{
      console.log(response.data)
      this.getCars()
    })
  }

  onCarUpdate(){
    axios.post('/api/updatecar', {
      brand: 'Honda'
    })
    .then(response=>{
      this.getCars()
    })
  }

  render(){
    return (
      <div className='App'>
        
        <button
          onClick = {()=>this.onSubmitCar()}
        >
          Add car
        </button>

        <button
          onClick = {()=>this.onCarRemove()}
        >
          Remove car
        </button>

        <button
          onClick = {()=>this.onCarUpdate()}
        >
          Update car
        </button>

        {
          this.state.cars.map((car)=>(
            <div>- {car.brand}</div>
          ))
        }

      </div>
    )
  }
}

export default App
