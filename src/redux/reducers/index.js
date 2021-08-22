import { combineReducers } from 'redux';
import CommonReducer from './common';
import UserReducer from './user';


const RootReducer = combineReducers({
    common: CommonReducer,
    user: UserReducer
})

export default RootReducer;