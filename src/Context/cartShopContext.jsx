import { createContext } from "react";
import { useState } from "react";

export const addItem = (bagItem, product)=>{
   
    let findProduct = bagItem.find((item)=> item.id == product.id)
   
    if(findProduct){
        return bagItem.map((item) => item.id ==product.id ? {...item, quantity: item.quantity +1} : item )
    }

 return [...bagItem, {...product, quantity:1}];
}




export const CartShopConext = createContext({
    bagItem:[],
    addItem:()=>{},
    isCartOpen:false,
    isCheckoutOpen:false,
    setIsCheckoutOpen: ()=>{},
    setIsCartOpen: ()=>{},
    setbagItem: ()=>{}
})




export const CartShopProvider = ({children})=>{
    const [bagItem, setbagItem]= useState([]);
    const [isCartOpen, setIsCartOpen]= useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen]= useState(false);


    const values={
        setbagItem, bagItem, addItem, isCartOpen, setIsCartOpen,
        setIsCheckoutOpen,isCheckoutOpen
    }

return(<CartShopConext.Provider value={values} >{children}</CartShopConext.Provider>)

}