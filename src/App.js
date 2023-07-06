import logo from './logo.svg';
import './App.css';
import ShopBY from './Components/ShopBY-links/shopBY';
import Navbar from './Routes/Navigation/Navbar';
import ShopBYObject from './Components/ShopByObject/shopByobject';
import NewRelease from './Components/NewRelease/newRelease';
import Magazine from './Components/Magazine/magazineSection';
import Discount from './Components/Discounts/discount';
import Footer from './Components/Footer/footers';
function App() {
  return (
    <div className="App">
     
  <Navbar />
  <ShopBYObject />
  <NewRelease />
  <Magazine />
  <Discount />

  <Footer />
    </div>
  );
}
export default App;
