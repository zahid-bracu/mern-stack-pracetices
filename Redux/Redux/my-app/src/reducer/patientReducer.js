export const patientState={
    patients:[]
}


export const  patientReducer=(state, action)=> {
    switch (action.type) {
      case 'add_patient':
        const newPatient={
            id:action.id,
            name:action.name
        }
        const allPatients=[...state.patients, newPatient];
        return {patients: allPatients};
      case 'remove_patient':
        const remaining=state.patients.filter(key=> key.id!==action.id);
        const newState={patients:remaining}
        return newState;
      default:
        return state;
    }
  }

