import { userReducer } from "./UserReducer/userReducer"
import { cartReducer } from "./CartReducer/cartReducer";
import { catagoryReducer } from "./CatagoriesReducer.js/CatagoryReducer";
import { combineReducers } from 'redux';
import { articleReducer } from "./ArticleReducer/articleReducer";


export const RootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    catagories:catagoryReducer,
    article:articleReducer
})