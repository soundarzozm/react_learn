import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';

const Profile = (props) => {
  
  const [redir, setRedir] = useState(false)
  
  const redirect = () => {
    if (redir){

      props.history.push('/')

      // return(
      //   <Redirect to='/' />
      // )
    }
  }
  
  console.log(props);

  return (
    <>
      {redirect()}
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>
        posts of profile
      </Link>
      <br/>
      <button onClick={()=>setRedir(true)}>
        Redirect
      </button>
    </>
  );
}

export default Profile;
