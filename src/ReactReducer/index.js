import loggedReducer from './loginReducer';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    loginReducer:loggedReducer
})

export default allReducers;