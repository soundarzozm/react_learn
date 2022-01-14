const DEFAULT_STORE = {
    userName: 'soundarzozm',
    userID: 4369
}

const appReducer = (state=DEFAULT_STORE, action) => {
    
    switch(action.type){
        
        case 'MOVIES_LIST':
            return action.payload
        
        default:
            return state
    }
}

export default appReducer
