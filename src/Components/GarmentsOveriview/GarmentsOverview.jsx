import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCollectionData } from "../../Firebase/firebase";
import { setCatagories,setCatagoryLoadError } from "../../Store/Reducers/CatagoriesReducer.js/CatagoryAction";
import { useEffect } from "react";
import Catagories from "../Categories/Categories";
import { SelectGarments } from "../../Store/Reducers/CatagoriesReducer.js/CatagorySelector";



const GarmentsOverView = ()=>{

    const Catagory = useSelector(SelectGarments);
    const dispatch = useDispatch()

    useEffect(()=>{
        
    
        const FetchCatagories = async ()=>{
       
            try{
                    let Data = await getCollectionData();
                    console.log(Data)
                    dispatch(setCatagories(Data))
                
          
            }catch(error){
                dispatch(setCatagoryLoadError, error)
            }}
            FetchCatagories();
    },[Catagory,dispatch])

    return(
       <div>

        { Catagory.length > 0 && 
        <Catagories DataShop={Catagory} isGarmentsFilterOn={true} isShoesFilterOn={false} isShopByFilterOn={false}/>
         }

       </div>
    )
}


export default GarmentsOverView;