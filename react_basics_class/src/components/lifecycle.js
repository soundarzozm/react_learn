import React, {Component} from 'react';

class Life extends Component{
    
    // To specify constructor yourself
    // Remember that this overrides state so have to mention state here itself
    constructor(props){
        super(props);
        this.state = {name: 'Francis'};
        console.log('1-constructor');
    }

    // Real lifecycle apparently
    // Basically triggers update by reading the new state
    // Access to the current state
    // Used to intercept the state and modify otg
    static getDerivedStateFromProps(props, state){
        console.log('2-getDerivedStateFromProps');

        if (state.name === "Steve"){
            return{
                name: "Yasha"
            }
        }

        return null;
    }

    // Tells if rendered
    componentDidMount(){
        console.log('4-componentDidMount');
    }

    // Tells if removed
    componentWillUnmount(){
        console.log('5-componentWillUnmount');
    }

    // Boolean, tells if render should happen again or not
    shouldComponentUpdate(nextProps, nextState){

        console.log('x-shouldComponentUpdate')

        if (nextState.name === "Ron"){
            return false
        }
        return true
    }

    // Executes after render, indicating if anything has been updated or not
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('x-componentDidUpdate')
        console.log(snapshot)
        console.log(prevState)
        console.log(this.state)
    }

    // Basically runs just before updation so that you can use the old stuff
    // Before componentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('x-getSnapshotBeforeUpdate')
        //console.log(prevState)
        //console.log(this.state)
        
        let age = 20;
        return age
    }
    
    // Whatever has to be rendered
    render(){
        console.log('3-render')
        return(
            <div>
                <div>{this.state.name}</div>
                <div onClick = {()=>this.setState({name: 'Steve'})}>
                    Click here
                </div>
            </div>
        )
    }

}

export default Life;
