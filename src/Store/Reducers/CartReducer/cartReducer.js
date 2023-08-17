import {cartTypes} from "../CartReducer/cartActionTypes";

const initialCart = {
    isCartOpen: false,
    cartItems: []
}

export const cartReducer = (state= initialCart, action)=>{
    const {type,payload}= action;

    switch(type){
        case cartTypes.setIsCartOpen:
            return {...state, isCartOpen:!state.isCartOpen}
        case cartTypes.addItemToCart: 
        return {...state, cartItems: payload}

        default:
            return state
    }

}