import './GarmentsStyling.css';
import Catagories from '../../Components/Categories/Categories';
import DataShop from '../../data';
import DisplayItem from '../../Components/DisplayItem/DisplayItem';
import { SelectCatagory } from '../../Store/Reducers/CatagoriesReducer.js/CatagorySelector';
import { setCatagories,setCatagoryLoadError } from '../../Store/Reducers/CatagoriesReducer.js/CatagoryAction';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCollectionData } from '../../Firebase/firebase';
const Garments = ()=>{  
    const Catagory = useSelector(SelectCatagory);
    const dispatch = useDispatch()
    
    const FetchCatagories = async ()=>{
        try{
            let Data = await getCollectionData();
            dispatch(setCatagories(Data))
        }catch(error){
            dispatch(setCatagoryLoadError, error)
        }
     
    }

 
useEffect(()=>{
    FetchCatagories();
},[])

  
    return(
       <div>
        {Catagory&&    <Catagories DataShop={Catagory}/>}

       </div>
    )
}

export default Garments;