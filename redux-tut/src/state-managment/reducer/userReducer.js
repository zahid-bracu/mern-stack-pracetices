import {users_request,get_users_failed,get_users_success} from '../type';

const initialState={
    loading:false,
    user:[],
    error:''
}

export default function(state=initialState,action) {
    switch(action.type){
        case users_request:
            return{
                ...state,
                loading:true
            }
        case get_users_success:
            return{
                ...state,
                loading:false,
                user:action.payload
            }
        case get_users_failed:
            return{
                ...state,
                loading:false,
                user:[],
                error:action.payload
            }
        default:
            return state;
    }
}