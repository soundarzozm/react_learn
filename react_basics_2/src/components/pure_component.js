import React, { Component } from "react"

class PureComp extends Component{

    state = {
        name: "Francis"
    }

    render(){
        console.log('render')
        return(
            <>
                <h3>{this.state.name}</h3>
                <button onClick={()=>this.setState({name:"Lisa"})}>
                    Click to change
                </button>
            </>
        )
    }
}

export default PureComp
