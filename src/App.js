import logo from './logo.svg';
import './App.css';
import ShopBY from './Components/ShopBY-links/shopBY';
import Navbar from './Routes/Navigation/Navbar';
import ShopBYObject from './Components/ShopByObject/shopByobject';
import NewRelease from './Components/NewRelease/newRelease';
import Magazine from './Components/Magazine/magazineSection';
import Discount from './Components/Discounts/discount';
import Footer from './Components/Footer/footers';
import HomePage from './Routes/HomePage/HomePage';
import Catagories from './Components/Categories/Categories';
import { Route,Routes } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import CheckOut from './Routes/CheckOut-for-MVP/checkout';
function App() {
  return (
    <div className="App">

  <Routes>
    <Route path='/' element={<Navbar />}>

    <Route index element={<HomePage />} />
    brands

    <Route path='/brands' element={<Catagories />} />
   <Route path='/SignUp' element={<SignUp />} />
   <Route path='/checkout' element={<CheckOut />} />
   
   </Route>
   
   
   
  </Routes>
     
  
    </div>
  );
}
export default App;
