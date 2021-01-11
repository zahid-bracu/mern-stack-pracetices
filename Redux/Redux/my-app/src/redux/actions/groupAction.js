export const ADD_TO_GROUP='ADD_TO_GROUP';
export const REMOVE_FROM_GROUP='REMOVE_FROM_GROUP';


export const addToGroup=(id)=>{
    return {
        type: ADD_TO_GROUP,
        id
    }
}


export const removeFromGroup=(id)=>{
    return {
        type: REMOVE_FROM_GROUP,
        id
    }
}