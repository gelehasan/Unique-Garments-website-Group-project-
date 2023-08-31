import { cartTypes } from "./cartActionTypes"

const addTocartHandlar = (productToAdd, cartItems )=>{
    const doesProductExist = cartItems.find((item)=> item.id == productToAdd.id);

    if(doesProductExist){
        return cartItems.map((item) => item.id ==productToAdd.id ? {...item, quantity: item.quantity +1} : item )
    }
 return [...cartItems, {...productToAdd, quantity:1}];
}

const descreaseItemHandlar = (productToAdd, cartItems)=>{
    const findProduct = cartItems.find((item)=> item.id == productToAdd.id);

    if(findProduct){

        if(productToAdd.quantity >1){
            return cartItems.map((item)=> item.id == productToAdd.id ? {...item, quantity: item.quantity-1}: item)
        }else{
            return cartItems.filter((item) => item.id != productToAdd.id)
        }

    }
}

export const setCartVisibility = (booleanValue)=>{

    return {type:cartTypes.setIsCartOpen, payload:booleanValue}
}

export const addItemToCart = ( productToAdd,cartItems)=>{
    const UpdatedCartItems = addTocartHandlar (productToAdd,cartItems);

    return {type:cartTypes.updateCartItems, payload:UpdatedCartItems}

}


export const decreaseItemQuanity = (productToAdd, cartItems)=> {
    const UpdatedCartItems = descreaseItemHandlar (productToAdd, cartItems);

    return {type:cartTypes.updateCartItems, payload:UpdatedCartItems}

}