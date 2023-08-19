import { getCollectionData } from "../../../Firebase/firebase";
import { catagoryTypes } from "./CatagoryReducer";



export const setCatagories = (payload)=>{

    return {type:catagoryTypes.FetchCatagorySuccess, payload: payload}
}

export const setCatagoryLoadError = (error)=>{

    return {type:catagoryTypes.FetchCatagorySuccess, payload: error}
}







export const StartFetchingCatagory = async()=>{

    try {
     const Data = await getCollectionData();
     
     return {type: catagoryTypes.FetchCatagorySuccess, payload: Data}
     
    } catch (error) {
     return {type:catagoryTypes.FetchCatagoryFail, payload:error}
 
    } 
  
 }