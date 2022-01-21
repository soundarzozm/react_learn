import * as api from '../../api'
import {
    GET_POSTS
} from '../types'

export const getPosts = (prevState, page, order, limit) => ({
    type: GET_POSTS,
    payload: api.getPosts(prevState, page, order, limit)
})
