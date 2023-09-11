import { createSelector } from "reselect";


const cartReducer= (state)=> state.cart;

const SelectCartSlice = createSelector(
    [cartReducer],
    (cartSlice)=>cartSlice.cartItems
)



export const getTotalPrice = createSelector(
    [SelectCartSlice],
    (cartItems)=>{
        let Total=0;
        cartItems.forEach((item)=>{
            Total += item.price* item.quantity
        })

        return Total;
    }
)


export const getNumberOfItems = createSelector(
    [SelectCartSlice],
    (cartItems)=>{
        let totalQuantity=0;
    
        cartItems.forEach((item)=>{
            totalQuantity+=item.quantity
        })
    
        return totalQuantity;
        
    }
)