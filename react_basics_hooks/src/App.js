import React, {useState, useCallback} from 'react';
import Title from './components/title';
import Count from './components/count';
import Age from './components/age';
import CountBtn from './components/countBtn';
import AgeBtn from './components/ageBtn';

const App = () => {

  // initialize states with useState
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  // useCallback listens to props in the array and updates only if the props change
  // here we are not listening to any props and we are just incrementing the prev prop directly
  // so the function is the same for memo hence it does not re-render
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount+1)
  }, []) 

  // same as above
  const incrementAge = useCallback(() => {
    setAge(prevAge => prevAge+1)
  }, [])

  return(
    <>
      <Title/>
      <Count count={count}/>
      <Age age={age}/>
      <CountBtn countHandler={incrementCount}/>
      <AgeBtn ageHandler={incrementAge}/>
    </>
  )
}

export default App;
