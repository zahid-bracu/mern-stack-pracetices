import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState={}

 const store=createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger, thunk))
)


export default store;