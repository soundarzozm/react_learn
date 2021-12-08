import React from 'react';
import User from './components/user';
import { MyProvider } from './context'

const App = () => {

  return(
    <>
      {/*have to wrap with context provider*/}
      <MyProvider>
        <User/>
      </MyProvider>
      
    </>
  )
}

export default App;
