import React from 'react';

const Count = ({count}) => {

    console.log('2-count')

    return(
        <>
            <h3>The count is: {count}</h3>
        </>
    )
}

// memo is used to cache the thing in the memory so that
// you dont have to re-render it if it is the same (props not changing)
export default React.memo(Count);
