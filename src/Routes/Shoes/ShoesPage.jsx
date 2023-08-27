import './ShoesStyling.css';
import { useSelector } from 'react-redux';
import Catagories from '../../Components/Categories/Categories';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCollectionData } from '../../Firebase/firebase';
import { setCatagories } from '../../Store/Reducers/CatagoriesReducer.js/CatagoryAction';
import { SelectShoes } from '../../Store/Reducers/CatagoriesReducer.js/CatagorySelector';
import { setCatagoryLoadError } from '../../Store/Reducers/CatagoriesReducer.js/CatagoryAction';
const Shoes = ()=>{
    const ShoesData = useSelector(SelectShoes);
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

{ ShoesData.length > 0 && 
        <Catagories DataShop={ShoesData} isGarmentsFilterOn={false} isShoesFilterOn={true} isShopByFilterOn={false} />
         }
        </div>
    )
}

export default Shoes;
