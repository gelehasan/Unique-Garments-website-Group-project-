
import DisplayItem from '../../Components/DisplayItem/DisplayItem';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import GarmentsOverView from '../../Components/GarmentsOveriview/GarmentsOverview';
const Garments = ()=>{  
   return(
   <> 
    <Helmet>
        <title>Garment page</title>
        <meta name='description' content='This is the garment page it shows overview of all garments items' /> 
      </Helmet>
    <Routes>
    <Route path='/' element={<GarmentsOverView/>} />
    <Route path=":itemId" element={<DisplayItem />} />
    </Routes>

    </>
   )
}

export default Garments;