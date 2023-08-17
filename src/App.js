import './App.css';
import Navbar from './Routes/Navigation/Navbar';
import HomePage from './Routes/HomePage/HomePage';
import { Route,Routes } from 'react-router-dom';
import SignUp from './Routes/SignUp/SignUp';
import CheckOut from './Routes/CheckOut-for-MVP/checkout';
import SignIn from './Routes/SignIn/SignIn';
import Garments from './Routes/Garments/GarmentsPage';
import Magazine from './Routes/Magazine/MagazinePage';
import Shoes from './Routes/Shoes/ShoesPage';
import ShopBY from './Components/ShopBY-links/shopBY';
import { useEffect } from 'react';
import { onAuthStateChangedListener, getUserInformation } from './Firebase/firebase';
import { useDispatch } from 'react-redux';
import { SetUser } from './Store/Reducers/UserReducer/userAction';

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener( async (user)=> {
      let userInfo;
      if (user) {  
         userInfo=  await getUserInformation (user.uid);
         dispatch(SetUser(userInfo))
      } 

  
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
   <Route path='/checkout' element={<CheckOut />} />
   <Route path='/Magazine' element={<Magazine />} /> 
   <Route path='/Shoes' element={<Shoes />} />
   <Route path='/ShopBy' element={<ShopBY />} />
   <Route path='/Garments' element={<Garments/>}/>
   
   </Route>
   
   
   
  </Routes>
     
  
    </div>
  );
}
export default App;
