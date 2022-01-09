import React from "react"
import UserHOC from "../hocs/user_hoc"

const User = (props) => {
    console.log(props)
    return(
        <div>
            User
        </div>
    )
}

const User2 = (props) => {
    console.log(props)
    return(
        <div>
            User 2
        </div>
    )
} 

export default UserHOC(User, User2, "Hello, I am")
