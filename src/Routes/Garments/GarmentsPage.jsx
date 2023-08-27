import './GarmentsStyling.css';
import Catagories from '../../Components/Categories/Categories';
import DataShop from '../../data';
import DisplayItem from '../../Components/DisplayItem/DisplayItem';
import { SelectGarments } from '../../Store/Reducers/CatagoriesReducer.js/CatagorySelector';
import { setCatagories,setCatagoryLoadError, StartFetchingCatagory} from '../../Store/Reducers/CatagoriesReducer.js/CatagoryAction';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCollectionData } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
const Garments = ()=>{  
    const Catagory = useSelector(SelectGarments);
    const dispatch = useDispatch()

    useEffect(()=>{
        const FetchCatagories = async ()=>{
            try{
                let Data = await getCollectionData();
                dispatch(setCatagories(Data))
            }catch(error){
                dispatch(setCatagoryLoadError, error)
            }}
            FetchCatagories();
    },[])

    return(
       <div>

        { Catagory.length > 0 && 
        <Catagories DataShop={Catagory} isGarmentsFilterOn={true} isShoesFilterOn={false} isShopByFilterOn={false}/>
         }

       </div>
    )
}

export default Garments;