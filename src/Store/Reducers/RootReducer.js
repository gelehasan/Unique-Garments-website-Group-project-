import { userReducer } from "./UserReducer/userReducer"
import { cartReducer } from "./CartReducer/cartReducer";
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})