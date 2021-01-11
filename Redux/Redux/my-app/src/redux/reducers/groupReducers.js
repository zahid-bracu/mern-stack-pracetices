import {ADD_TO_GROUP, REMOVE_FROM_GROUP} from '../actions/groupAction';

const initialState={
    group:[],
    members:[]
}


const groupReducers=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_GROUP:
            const newId=action.id;
            const newGroup=[...state.group,newId];
            return {group:newGroup}
        case REMOVE_FROM_GROUP:
            const id=action.id;
            const removedGroup=state.group.filter(item=>item !== id);
            return {group:removedGroup}
        default:
            return state;
    }
}


export default groupReducers;