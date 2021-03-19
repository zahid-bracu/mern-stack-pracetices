import React, {useState, useReducer} from 'react'

import {reducer, initialState} from './Reducer';

export default function ReducerCount() {
    const [state,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <h4>Reducer Count : {state.count}</h4>
            <button onClick={()=>dispatch({type:'INCREASE'})}>Increase</button>
            <button onClick={()=>dispatch({type:'DECREASE'})}>Increase</button>
        </div>
    )
}
