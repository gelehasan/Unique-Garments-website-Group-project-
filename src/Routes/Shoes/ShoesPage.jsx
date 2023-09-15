import ShoesOverView from "../../Components/ShoesOverView/ShoesOverView";
import { Routes, Route } from "react-router-dom";
import DisplayItem from "../../Components/DisplayItem/DisplayItem";
import { Helmet } from "react-helmet";
const Shoes = ()=>{
   

    return(
        <>
         <Helmet>
        <title>Shoes page</title>
        <meta name='description' content='This is the shoes page, it shows overview of all shoes items' /> 
      </Helmet>
        <Routes>
        <Route path="/" element={<ShoesOverView />}/>
        <Route path=":itemId" element={<DisplayItem />} />

        </Routes>
      
      </>
    )
}

export default Shoes;
