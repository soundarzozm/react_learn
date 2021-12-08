import React, {Component} from 'react';

// define the context
const MyContext = React.createContext();

// build provider as a class since it is easier to use state like this
// you can always use a functional component with useState()
class MyProvider extends Component {
    
    state = {
        users:[
            {id:1, name:"Francis"},
            {id:2, name:"Steve"},
            {id:3, name:"Lisa"}
        ],
        active: true
    }

    toggleActive = () => {
        this.setState({active:!this.state.active})
    }
    
    render(){
        return(
            <MyContext.Provider value={{
                users: this.state.users,
                active: this.state.active,
                toggleActive: this.toggleActive
            }}>
                {this.props.children}
            </MyContext.Provider>
        )    
    }
}

export {MyContext, MyProvider}
