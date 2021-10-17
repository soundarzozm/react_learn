import React, {Component} from 'react';

// let styles = {
//     header: {background: '#03a9fa'},
//     logo: {
//         color: '#fff',
//         fontFamily: 'Roboto Mono',
//         textAlign: 'center'
//     }
// }

class Header extends Component{

    state = {
        active: false,
        keywords: ""
    }

    inputChangeHandler = (event) => {

        const value = event.target.value === '' ? false : true;

        this.setState({
            active: value,
            keywords: event.target.value
        })
    }

    render(){

        return(
            <header style={{background: `${this.state.active ? 'red' : 'blue'}`}}>
                <div className="logo">Logo</div>
                <input
                    onChange = {this.inputChangeHandler}
                />
            </header>
        )
    }
}

export default Header;
