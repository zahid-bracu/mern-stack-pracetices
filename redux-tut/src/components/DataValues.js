import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {add,remove} from '../state-managment/actions/arrayAction';
export default function DataValues() {
    const data=useSelector(state=> state.arrayReducer.array);
    const dispatch=useDispatch();
    console.log(data);
    return (
        <>
            <button onClick={()=>dispatch(add("Creep"))}>Add data</button>
            <button onClick={()=>dispatch(remove())}>remove data</button>
        </>
    )
}
