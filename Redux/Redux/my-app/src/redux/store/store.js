import {createStore} from 'redux';
import groupReducers from '../reducers/groupReducers';

export const store = createStore(groupReducers);