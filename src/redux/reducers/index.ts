import { combineReducers } from 'redux';
import userData from './user';
import walletData from './wallet';

const rootReducer = combineReducers({ user: userData, wallet: walletData });

export default rootReducer;
