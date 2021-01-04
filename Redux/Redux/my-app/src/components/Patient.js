import React, { useReducer, useRef } from 'react';
import {patientState, patientReducer} from '../reducer/patientReducer';
const Patient = () => {

    const [state,dispatch]=useReducer(patientReducer, patientState)
    
    // name ref
    const nameRef=useRef();
    
    const handleSubmit= (event)=>{
        event.preventDefault();
        console.log(nameRef.current.value);

        if(nameRef.current.value){
            dispatch({
                type:"add_patient",
                name:nameRef.current.value,
                id:state.patients.length+1
            })
        }
        
    }
    return (
        <div>
            <h5 className="text-center">Manage Doctor Chamber : {state.patients.length}</h5>


            <form className="d-block mx-auto" style={{maxWidth:"300px" }} onSubmit={handleSubmit}>
                <input class="form-control" ref={nameRef} />
                <button className="btn btn-info d-block mx-auto mt-3"> Submit</button>
            </form>

            <div className="text-center">
                <ul style={{maxWidth:"700px"}} className="mt-3 mx-auto list-group">
                {
                    state.patients.map(list=>
                        <div className="row justify-content-center">
                            <li  className="list-group-item" >{list.name}</li>
                            <button onClick={()=>dispatch({
                                type:'remove_patient',
                                id:list.id
                            })} className="btn btn-danger btn-sm">Remove</button>
                        </div>
                        )
                }
                </ul>
                
            </div>
        </div>
    );
};

export default Patient;