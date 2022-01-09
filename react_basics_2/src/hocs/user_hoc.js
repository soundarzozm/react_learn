import React from 'react'

const UserHOC = (WrappedComponent, WrappedComponent2, arg1) => {
    return (props) => (
        <>
            {console.log(props)}
            {arg1}
            <WrappedComponent/>
            <WrappedComponent2 {...props}/>
        </>
    )
}

export default UserHOC
