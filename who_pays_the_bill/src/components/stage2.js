import React, {useContext} from 'react';
import {MyContext} from '../context';

const Stage2 = () => {

  const context = useContext(MyContext);

  return (
    <>
      
      <div className="result_wrapper">
        <h3>The loser is:</h3>
        <div>{context.state.result}</div>
      </div>

      <div 
        className="action_button"
        onClick={()=>context.resetGame()}>
        Start over
      </div>

      <div 
        className="action_button btn_2"
        onClick={()=>context.getNewLoser()}>
        Get new loser
      </div>

    </>
  )
}

export default Stage2;
