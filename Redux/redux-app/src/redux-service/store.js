import {createStore} from 'redux';
import rootReducer from './reducer'


const initialSate={}

const store=createStore(
    rootReducer,
    initialSate
)



export default store;