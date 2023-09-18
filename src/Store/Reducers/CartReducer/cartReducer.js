
export const cartTypes = {
    setIsCartOpen: "setIsCartOpen",
    updateCartItems:"updateCartItems",
}

const initialCart = {
    isCartOpen: false,
    cartItems: []
}

export const cartReducer = (state= initialCart, action)=>{
    const {type,payload}= action;

    switch(type){
        case cartTypes.setIsCartOpen:
            return {...state, isCartOpen:payload}
        case cartTypes.updateCartItems: 
        return {...state, cartItems: payload}

        default:
            return state
    }

}