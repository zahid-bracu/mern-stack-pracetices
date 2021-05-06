import {users_request,get_users_failed,get_users_success} from '../type';

const initialState={
    loading:false,
    user:[],
    error:''
}

// export default function(state=initialState,action) {
//     switch(action.type){
//         case increment_value:
//             return{
//                 ...state,
//                 count:state.count+action.payload
//             }
//         case decrement_value:
//             return{
//                 ...state,
//                 count:state.count-action.payload
//             }
//         default:
//             return state;
//     }
// }