import React from 'react';

// let styles = {
//     header: {background: '#03a9fa'},
//     logo: {
//         color: '#fff',
//         fontFamily: 'Roboto Mono',
//         textAlign: 'center'
//     }
// }

const Header = (props) => {
    return(
        <header>
            <div className="logo">Logo</div>
            <input
                onChange = {props.keywords}
            />
        </header>
    )
}

export default Header;
