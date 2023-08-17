import { cartTypes } from "./cartActionTypes"

/*const addTocartHandlar = (productToAdd, cartItems )=>{
    const doesProductExist = cartItems.find((item)=> item.id == productToAdd.id);

    if(doesProductExist){
        return cartItems.map((item) => item.id ==productToAdd.id ? {...item, quantity: item.quantity +1} : item )
    }
 return [...cartItems, {...productToAdd, quantity:1}];
}
*/

export const setCartVisibility = ()=>{

    return {type:cartTypes.setIsCartOpen }
}

/*export const addItemToCart = (productToAdd)=>{
    const UpdatedCartItems = addTocartHandlar (productToAdd,cartItems);

    return {type:cartTypes.addItemToCart, payload:UpdatedCartItems}

}*/