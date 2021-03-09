import React, {useState, useReducer} from 'react'
import {PatientReducer,patientState} from './PatientReducer';

export default function PatientManagment() {
    const [state, dispatch]=useReducer(PatientReducer, patientState);
    console.log(state);
    return (
        <div>
            <h1>Patient Management : {state.patients.length}</h1>
        </div>
    )
}
