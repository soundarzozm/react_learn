import React from 'react';

const AgeBtn = ({ageHandler}) => {

    console.log('5-ageBtn')

    return(
        <>
            <button onClick = {ageHandler}>
                Increment Age
            </button>
        </>
    )
}

export default React.memo(AgeBtn);
