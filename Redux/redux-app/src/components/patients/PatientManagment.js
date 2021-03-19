import React, {useState, useReducer} from 'react'
import {PatientReducer,patientState} from './PatientReducer';
import {useRef} from 'react';

export default function PatientManagment() {
    const nameRef=useRef();
    const [state, dispatch]=useReducer(PatientReducer, patientState);
    console.log(state);

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
    }
    const removeItem=(_id)=>{
        console.log(_id);
        dispatch({
            type: 'REMOVE_PATIENT',
            id:_id
        })
    }
    return (
        <div>
            <h1>Patient Management : {state.patients.length}</h1>

            <form >
                <input ref={nameRef}></input>
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>

            {
                state.patients.map(key => <li>{key.name} 
                
                <button onClick={()=>removeItem(key.id)} >Remove</button>
                
                </li>)
            }

        </div>
    )
}
