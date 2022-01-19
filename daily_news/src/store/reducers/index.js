import { combineReducers } from "redux"

import postReducer from './post_reducer'
import userReducer from './user_reducer'

const appReducers = combineReducers({
    postReducer,
    userReducer
})

export default appReducers
