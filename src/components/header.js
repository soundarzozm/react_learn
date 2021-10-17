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
        keywords: ""
    }

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

    render(){
        return(
            <header>
                <div className="logo">Logo</div>
                <input
                    onChange = {this.inputChangeHandler}
                />
            </header>
        )
    }
}

export default Header;
