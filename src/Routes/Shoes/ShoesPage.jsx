import ShoesOverView from "../../Components/ShoesOverView/ShoesOverView";
import { Routes, Route } from "react-router-dom";
import DisplayItem from "../../Components/DisplayItem/DisplayItem";
const Shoes = ()=>{
   

    return(
        <Routes>
        <Route path="/" element={<ShoesOverView />}/>
        <Route path=":itemId" element={<DisplayItem />} />

        </Routes>
      
    )
}

export default Shoes;
