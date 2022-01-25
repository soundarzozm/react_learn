import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Moment from 'react-moment'
import {showToast} from '../utils/tools'

import Newsletter from '../utils/newsletter'
import {getPostByID, clearPostByID} from '../../store/actions'

const PostComponent = (props) => {

    const post = useSelector(state=>state.postReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPostByID(props.match.params.id))
    }, [dispatch, props.match.params.id])

    useEffect(()=>{
        dispatch(clearPostByID())
    }, [dispatch])

    useEffect(()=>{
        if(post.postByID === '404'){
            showToast('ERROR', 'Page not found!')
            props.history.push('/')
        }
    }, [post, props.history])

    return(
        <> 
            {post.postByID ? 
            <div className='article_container'>
                <h1>{post.postByID.title}</h1>
                <div
                    className='image'
                    style={{
                        background: `url(${post.postByID.imagexl})`
                    }}
                ></div>
                <div className='author'> 
                    Created by: <span>{post.postByID.author} - </span>
                        <Moment format='DD MMMM'>
                            {post.postByID.createdAt}
                        </Moment>
                </div>
                <div 
                    className='mt-3 content'
                    dangerouslySetInnerHTML={{__html: post.postByID.content}}
                ></div> 
            </div>
            : null
        } 
            <Newsletter/>
        </>
    )
}

export default PostComponent
