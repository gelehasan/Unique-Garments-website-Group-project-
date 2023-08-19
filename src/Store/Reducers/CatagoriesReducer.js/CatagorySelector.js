import { createSelector } from "reselect";


const catagoryReducer= (state)=> state.catagories;

const SelectcatagorySlice = createSelector(
    [catagoryReducer],
    (catagorySlice) =>catagorySlice.Catagory
)



export const SelectCatagory = createSelector(
    [SelectcatagorySlice],
    (catagory)=> {
        let AllCatagories = [];
        catagory.map((catagoryItem)=>{
            AllCatagories.push(...catagoryItem.itemData)
        })

        return AllCatagories;
    }
)
