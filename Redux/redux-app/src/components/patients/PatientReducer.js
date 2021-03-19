export const patientState={
    patients:[]
}


export const PatientReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_PATIENT':
            const newPatient={
                id:action.id,
                name:action.name 
            }
            const allPatients=[...state.patients,newPatient];
            return {patients: allPatients}
        case 'REMOVE_PATIENT':
            const remain=state.patients.filter(key=> key.id !==action.id);
            const newState={patients : remain};
            return newState;
        default:
            return state;
    }
}
