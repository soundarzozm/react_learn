import React, {useState} from 'react';

// read the prop
const App = ({initialCount}) => {

  // useState() returns two values -> (data, function)
  // the function determines what to do with the data
  const [state, setState] = useState({
    count: initialCount,
    user: "Francis"
  })

  // can use multiple useState() hooks in a single component
  let [posts, setPosts] = useState([
    {
      name: "Post number 1",
      body: "Body of post1"
    },
    {
      name: "Post number 2",
      body: "Body of post2"
    }
  ])

  // a function rather than direct setCount()
  const restOne = () => {

    // what the fuck
    setState({
      ...state,
      count: state.count-1
    })
  }

  // function to add an element to the the list (state)
  const addOnePost = () => {
    let newPost = {
      name: "Post number 3",
      body: "Body of post3"
    }

    // similar to the count thing
    setPosts([
      ...posts,
      newPost
    ])
  }

  return(
    <>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>

      <button onClick={() => setState({...state, count: state.count+1})}>
        Add one +1
      </button>

      <button onClick={restOne}>
        Rest one -1
      </button>

      <button onClick={() => setState({...state, count: initialCount})}>
        Reset
      </button>

      <hr/>

      {/* idk javascript */}
      {posts.map((item, i)=>(
        <div key={i}>
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
          <hr/>
        </div>
      ))}

      <button onClick={addOnePost}>
        Add one post
      </button>

    </>
  )
}

export default App;
