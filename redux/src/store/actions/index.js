import { GET_USERS, MOVIES_LIST, MOVIE_DATA } from "../types"
import axios from 'axios'

export const moviesList = () => {
    return {
        type: MOVIES_LIST,
        payload: [
            {id: 1, name: "Pulp Fiction"},
            {id: 2, name: "Pacific Rim"},
            {id: 3, name: "Rambo"}
        ]
    }
}

export const getUsers = () => {
    const request = axios.get(`https://jsonplaceholder.typicode.com/users`)
                    .then(response=>{
                        return response.data
                    })
    
    return {
        type: GET_USERS,
        payload: request
    }
}

export const movieData = () => {
    return {
        type: MOVIE_DATA,
        payload: {
            id: 1,
            name: 'Pulp Fiction',
            actors: ['Travolta', 'Thurman'],
            year: 1990,
            director: 'Tarantino'
        }
    }
}
