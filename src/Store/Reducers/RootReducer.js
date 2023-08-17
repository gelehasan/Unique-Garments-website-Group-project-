import { userReducer } from "./UserReducer/userReducer"
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
    user: userReducer
})