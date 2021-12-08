import React, {Component} from 'react';
import UserItem from './user_item';
import {MyContext} from '../context';

// using context with class
class User extends Component {
    
    // reserved keyword
    // can only use one context per class
    static contextType = MyContext;
    
    render(){
        return(
            <>
                {/*way to use mutliple contexts*/}
                <MyContext.Consumer>
                    {context => {
                        console.log(context)
                    }}
                </MyContext.Consumer>
                <UserItem/>
            </>
            
        )
    }
    
}

export default User;
