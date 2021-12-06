import React, {useEffect} from 'react';

const Post = ({item}) => {

    // for mounting and unmounting
    // first console log only for mounting
    // console log with return is only for unmounting (not sure how it works have to check)
    useEffect(()=>{
        console.log('post created')
        
        // I believe this is for javascript and the other is for jsx
        return () => {
            console.log('post removed')
        }
    }, [])

    return(
        <div>
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
          <hr/>
        </div>
    )
} 

export default Post;
