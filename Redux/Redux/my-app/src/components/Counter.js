import React, { useReducer, useState } from "react";
 

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
      case 'multiply':
        return {count: state.count * 2};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
          <div className="">
            <h4 className="text-center mt-5">Count: {state.count}</h4>
          </div>
      <div className="mx-auto my-5 d-block" style={{maxWidth:"597px",display:"flex"}}>
        <button className="btn btn-success px-5 mx-3" onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        <button className="btn btn-secondary px-5 mx-3" onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button className="btn btn-info px-5 mx-3" onClick={() => dispatch({type: 'multiply'})}>Multiply</button>
      </div>
    </div>
  );
}

export default Counter;