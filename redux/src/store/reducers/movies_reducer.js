import { GET_USERS, MOVIES_LIST, MOVIE_DATA } from "../types"

const DEFAULT_STORE = {
    userName: 'soundarzozm',
    userID: 4369
}

const appReducer = (state=DEFAULT_STORE, action) => {
    
    switch(action.type){
        
        case MOVIES_LIST:
            return {...state, moviesList: action.payload}
        
        case MOVIE_DATA:
            return {...state, movieData: action.payload}

        case GET_USERS:
            return {...state, users: action.payload}

        default:
            return state
    }
}

export default appReducer
