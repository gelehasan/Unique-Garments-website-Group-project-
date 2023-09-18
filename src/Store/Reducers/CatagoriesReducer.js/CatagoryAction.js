import { getCategoriesData } from "../../../Firebase/firebase";
import { catagoryTypes } from "./CatagoryReducer";



export const setCatagories = (payload)=>{

    return {type:catagoryTypes.FetchCatagorySuccess, payload: payload}
}

export const setCatagoryLoadError = (error)=>{

    return {type:catagoryTypes.FetchCatagorySuccess, payload: error}
}






 export async function fetchAndDispatchCategories(dispatch) {
    try {
      let data = await getCategoriesData();
  
      dispatch(setCatagories(data));
    } catch (error) {
      // Handle the error here if needed
      console.error("Error fetching categories:", error);
    }
  }