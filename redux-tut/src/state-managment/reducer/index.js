import { combineReducers } from 'redux'
import reducer from './reducer';
import arrayReducer from './arrayReducer';
import userReducer from './userReducer';
export default combineReducers({
    reducer,
    arrayReducer,
    userReducer
})
