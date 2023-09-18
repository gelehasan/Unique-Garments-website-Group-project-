import './App.css';
import Navbar from './Routes/Navigation/Navbar';
import HomePage from './Routes/HomePage/HomePage';
import { Route,Routes } from 'react-router-dom';
import SignUp from './Routes/SignUp/SignUp';
import SignIn from './Routes/SignIn/SignIn';
import Garments from './Routes/Garments/GarmentsPage';
import Articles from './Routes/ArticlePage/articlePage';
import Shoes from './Routes/Shoes/ShoesPage';

import WishList from './Routes/WishList/WishList';
import ShopBy from './Routes/ShopBy/ShopByPage';
import DisplayItem from "../src/Components/Catagories-Component/DisplayItem/DisplayItem";
import { useEffect } from 'react';
import { onAuthStateChangedListener, getUserInformation } from './Firebase/firebase';
import { useDispatch } from 'react-redux';
import { SetUser } from './Store/Reducers/UserReducer/userAction';
import CheckoutPage from './Routes/CheckoutPage/checkout';
import Profile from './Routes/Profile/Profile';
import PaymentPage from './Routes/PaymentPage/PaymentPage';

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener( async (user)=> {
      let userInfo;
      if (user) {  
         userInfo=  await getUserInformation (user.uid);
        
      } 
      dispatch(SetUser(userInfo))
  
    });
    return unsubscribe;
  }, []);




  return (
    <div className="App">

  <Routes>
    <Route path='/' element={<Navbar />}>

    <Route index element={<HomePage />} />

  
   <Route path='/SignUp' element={<SignUp />} />
   <Route path='/SignIn' element={<SignIn />} />
   <Route path='/checkout' element={<CheckoutPage />} />
   <Route path='/Articles/*' element={<Articles />} /> 
   <Route path='/Shoes/*' element={<Shoes />} />
   <Route path='/ShopBy' element={<ShopBy />} />
   <Route path='/Garments/*' element={<Garments/>}/>
   <Route path='/WishList' element={<WishList/>} />
   <Route path='/Profile' element={<Profile/>} />
   <Route path='/item' element={<DisplayItem/>}/>
   <Route path='/payment' element={<PaymentPage />}/>
   
   </Route>
   
   
   
  </Routes>
     
  
    </div>
  );
}
export default App;
