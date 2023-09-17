import Product from "../Products/Products";
import { useEffect, useState } from 'react';
import AccessoriesFiltering from "../Filters/AccessoriesFIlter/Accessories";
import BagsFilterig from "../Filters/BagsFilter/BagsFilter";
import ClothingFilter from "../Filters/ClothingFilter/ClothingFilter";
import BrandsFilter from "../Filters/BrandsFilter/BrandsFilter";
import ColorFilter from "../Filters/ColorsFilter/ColorsFilter";
import './Categories.css';
import ShopByFilter from "../Filters/ShopByFilter/ShopByFilter";
import ShoesFilter from "../Filters/ShoesFilter/ShoesFilter";
import SearchFilter from "../Filters/SearchFilter/SearchFilter";


const Catagories = ({DataShop,isGarmentsFilterOn, isShoesFilterOn, isShopByFilterOn})=>{
  const [filteredItems, setselectedFilter] = useState(DataShop);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedColor, setSelectedColor]= useState("All");
  const [selectedCatagory, setSelectedCatagory] = useState("All")
  const [selectedOccasion, setSelectedOccasion ] = useState("All");  
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [searchInput, setSearchInput] = useState("");   
  const [filterMenu, setFilterMenu] = useState(false); 
  
  
 
  const handleCatagory = (itemName) => {
    if (itemName === selectedCatagory) {
      setSelectedCatagory("All");
      console.log(itemName, selectedCatagory);
    } else {
      setSelectedCatagory(itemName);
    }
  }
  
 
const HandleFIlterVisibility= ()=>{
  setFilterMenu(!filterMenu);
}
  const handleGroupChange = (groupName) => {
    if (groupName === selectedGroup) {
      setSelectedGroup("All");
    } else {
      setSelectedGroup(groupName);
    }
  }
  
  useEffect(() => {
    filterItems();
  }, [selectedBrand, selectedColor, selectedCatagory, selectedOccasion, selectedGroup, searchInput]);
  
  const filterItems = () => {
    let newFilteredItems = DataShop;
  
    if (searchInput !== "") {
      newFilteredItems = newFilteredItems.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  
    if (selectedOccasion !== "All") {
      newFilteredItems = newFilteredItems.filter((item) => item.occasions === selectedOccasion);
      
    }
  
    if (selectedColor !== "All") {
      newFilteredItems = newFilteredItems.filter((item) => item.color === selectedColor);
    }
    
    if (selectedCatagory !== "All") {
      newFilteredItems = newFilteredItems.filter((item) => item.category === selectedCatagory);
    }
  
    if (selectedBrand !== "All") {
      newFilteredItems = newFilteredItems.filter((item) => item.brand === selectedBrand);
    }
    
    if (selectedGroup !== "All") {
      newFilteredItems = newFilteredItems.filter((item) => item.group === selectedGroup);
    }
  
    setselectedFilter(newFilteredItems);
  }
  

  return (
    <div className='ParentDiv'>
      <div className='AllFilterContainer'>
        <SearchFilter
          setSearchInput={setSearchInput}
          HandleFIlterVisibility={HandleFIlterVisibility}
        />
  
        <div className={filterMenu ? "filterOptions" : "filterOptions closeFilter"}>
          {isGarmentsFilterOn && <AccessoriesFiltering
            selectedCatagory={selectedCatagory}
            handleCatagory={handleCatagory}
            selectedGroup={selectedGroup}
            handleGroupChange={handleGroupChange}
          />}
          {isGarmentsFilterOn && <BagsFilterig
            selectedGroup={selectedGroup}
            handleGroupChange={handleGroupChange}
            handleCatagory={handleCatagory}
            selectedCatagory={selectedCatagory}
          />}
          {isGarmentsFilterOn && <ClothingFilter
            selectedGroup={selectedGroup}
            handleGroupChange={handleGroupChange}
            handleCatagory={handleCatagory}
            selectedCatagory={selectedCatagory}
          />}
          {isShoesFilterOn && <ShoesFilter
            handleCatagory={handleCatagory}
            selectedCatagory={selectedCatagory}
          />}
          {isShopByFilterOn && <ShopByFilter
            setSelectedOccasion={setSelectedOccasion}
            selectedOccasion={selectedOccasion}
          />}
          
          {/* Bottom sections */}
          <BrandsFilter
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />
          <ColorFilter
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <div className="viewItemBtnDiv">
            <button className="viewAllItemsBtn" onClick={HandleFIlterVisibility}>
              View All {filteredItems.length} Items
            </button>
          </div>
        </div>
        
        {/* Filtering section ends */}
      </div>
      <div className="catagoriesContent">
        {filteredItems.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </div>
    </div>
  );
  
    
}
export default Catagories;