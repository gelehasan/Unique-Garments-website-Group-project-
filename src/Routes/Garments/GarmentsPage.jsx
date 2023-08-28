
import DisplayItem from '../../Components/DisplayItem/DisplayItem';

import { Route, Routes } from 'react-router-dom';
import GarmentsOverView from '../../Components/GarmentsOveriview/GarmentsOverview';
const Garments = ()=>{  
   return(

    <Routes>
    <Route path='/' element={<GarmentsOverView/>} />
    <Route path=":itemId" element={<DisplayItem />} />
    </Routes>
   )
}

export default Garments;