import React, { useReducer, useState } from 'react'

export default function State() {
    const initialState = {count: 0};

    function reducer(state, action) {
      switch(action.type) {
        case 'reset':
          return initialState;

          case 'incrememt':
          return {count: state.count + 1};

          case 'decrememt':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
    }

    const [state, dispatch] = useReducer(reducer , initialState);
  return (
    <div>
        count: {state.count}
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type: 'decrememt'})}>-</button>
        <button onClick={() => dispatch({type: 'incrememt'})}>+</button>
    </div>
  )
}
