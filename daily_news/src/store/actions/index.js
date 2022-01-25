import * as api from '../../api'
import {
    GET_POSTS,
    ADD_NEWSLETTER,
    CLEAR_NEWSLETTER,
    GET_POST_BY_ID,
    CLEAR_POST_BY_ID
} from '../types'

export const getPosts = (prevState, page, order, limit) => ({
    type: GET_POSTS,
    payload: api.getPosts(prevState, page, order, limit)
})

export const addNewsletter = (data) => ({
    type: ADD_NEWSLETTER,
    payload: api.addNewsletter(data)
})

export const clearNewsletter = () => ({
    type: CLEAR_NEWSLETTER,
    payload: {
        newsletter: false,
        email: []
    }
})

export const getPostByID = (id) => ({
    type: GET_POST_BY_ID,
    payload: api.getPostByID(id)
})

export const clearPostByID = () => ({
    type: CLEAR_POST_BY_ID,
    payload: null
})
