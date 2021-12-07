import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }

  triggerHandler = () => {
    console.log(this.textInput.current.value);
  }

  render(){
    return(
      <>
        
        <h1>Form:</h1>
        
        <input type="text" ref={this.textInput}/>
        
        <button onClick={this.triggerHandler}>
          Trigger
        </button>
      
      </>
    )
  }

}

export default App;
