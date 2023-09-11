import { createSelector } from "reselect";


const catagoryReducer= (state)=> state.catagories;

const SelectcatagorySlice = createSelector(
    [catagoryReducer],
    (catagorySlice) =>catagorySlice.Catagory
)



export const SelectGarments = createSelector(
    [SelectcatagorySlice],
    (catagory)=> {
        let AllCatagories = [];
        catagory.map((catagoryItem)=>{
            if(catagoryItem.itemName !=="Shoes"){

           
            AllCatagories.push(...catagoryItem.itemData)
        }
        })

        return AllCatagories;
    }
)



export const SelectShoes = createSelector(
    [SelectcatagorySlice],
    (catagory)=> {
        let AllCatagories = [];
        catagory.map((catagoryItem)=>{
            if(catagoryItem.itemName ==="Shoes"){

           
            AllCatagories.push(...catagoryItem.itemData)
        }
        })

        return AllCatagories;
    }
)

export const SelectAllCatagories = createSelector(
    [SelectcatagorySlice],
    (catagory)=> {
        let AllCatagories = [];
        catagory.map((catagoryItem)=>{
        
            AllCatagories.push(...catagoryItem.itemData)
   
        })

        return AllCatagories;
    }
)

