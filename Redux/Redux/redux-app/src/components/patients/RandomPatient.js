import React, {useState, useReducer, useEffect} from 'react'
import {PatientReducer,patientState} from './PatientReducer';
import {useRef} from 'react';

export default function PatientManagment() {
    const nameRef=useRef();
    const [state, dispatch]=useReducer(PatientReducer, patientState);
    console.log(state);

    useEffect(()=>{
        
    },[state.patients.length]);

     
    return (
        <div>
            <h1>Patient Management : {state.patients.length}</h1>

            
        </div>
    )
}
