import { combineReducers } from 'redux'
import reducer from './reducer';
import arrayReducer from './arrayReducer';

export default combineReducers({
    reducer,
    arrayReducer
})
