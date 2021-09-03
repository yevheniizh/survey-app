import { combineReducers } from 'redux';
import auth from './auth.reducer';
import surveys from './surveys.reducer';

export default combineReducers({ auth, surveys });
