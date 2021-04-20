import {increment_value,decrement_value} from '../type';

const initialState={
    count:0
}

export default function(action,state=initialState) {
    switch(action.type){
        case increment_value:
            return{
                ...state,
                count:state.count+1
            }
        case decrement_value:
            return{
                ...state,
                count:state.count-1
            }
        default:
            return state;
    }
}