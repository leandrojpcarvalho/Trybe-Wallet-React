import { combineReducers } from 'redux';
import userData from './user';

const rootReducer = combineReducers({ user: userData });

export default rootReducer;
