import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getPosts} from '../../store/actions'

import {Spinner, Button} from 'react-bootstrap'

const HomePosts = () => {

    const homePost = useSelector(state => state.postReducer)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        dispatch(getPosts({}, 1, "desc", 6))
    }, [dispatch])

    const loadMorePosts = () => {
        const page = homePost.page + 1
        setLoading(true)
        dispatch(getPosts(homePost, page, "desc", 6)).then(()=>{
            setLoading(false)
        })
    }

    return (
        <>
            { loading ? 
                <div style={{textAlign: 'center'}}>
                    <Spinner animation="border" role="status">
                        <span className='sr-only'>
                            Loading
                        </span>
                    </Spinner>
                </div>
                : null}
            {!homePost.end & !loading?
            <Button
                variant="outline-dark"
                onClick={()=>loadMorePosts()}
            >
                Load more posts    
            </Button> 
            : null}
        </>
    )
}

export default HomePosts
