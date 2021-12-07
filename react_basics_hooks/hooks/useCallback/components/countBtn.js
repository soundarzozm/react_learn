import React from 'react';

const CountBtn = ({countHandler}) => {

    console.log('4-countBtn')

    return(
        <>
            <button onClick = {countHandler}>
                Increment Count
            </button>
        </>
    )
}

export default React.memo(CountBtn);
