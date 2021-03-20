import { combineReducers } from 'redux';

import characters from './characters';
import auth from './auth';


export const reducers = combineReducers({ characters , auth});
