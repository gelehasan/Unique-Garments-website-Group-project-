import Product from "../Products/Products";
import { useEffect, useState } from 'react';
import search from  '../../Assets/search.svg';
import AccessoriesFiltering from "../Filters/AccessoriesFIlter/Accessories";
import BagsFilterig from "../Filters/BagsFilter/BagsFilter";
import ClothingFilter from "../Filters/ClothingFilter/ClothingFilter";
import BrandsFilter from "../Filters/BrandsFilter/BrandsFilter";
import ColorFilter from "../Filters/ColorsFilter/ColorsFilter";
import './Categories.css';
const brandNames = ["Adidas", "Balenciaga", "Converse", "J.Crew", "Nike", "Off-white", "Rick Owens"];
const colors = ["Black", "purple","Blue", "Orange"];
const accessoriesNames=["Hat","Sunglasses", "Belt","Socks"];
const Bags = [ "Fanny Packs","Duffel Bags", "Backpacks"];
const Clothing = ["T-shirt", "Outerwear", "Trousers", "Jeans", "Shorts"];

const Catagories = ({DataShop})=>{
  const [filteredItems, setselectedFilter] = useState(DataShop);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedColor, setSelectedColor]= useState("All");
  const [selectedItem, setselectedItem] = useState("All")
  const [selectedOccasion, SetselectedOccasion ] = useState("All");  
  const [searchInput, setSearchInput] = useState("");    
  

  const handleCatagory= (itemName)=>{
    if(itemName==selectedItem){
      setselectedItem("All");
    }else{
      setselectedItem(itemName)
    }
  }
  const handleOccasionChange = (occasionName)=>
  {
    if(occasionName==selectedOccasion){
      SetselectedOccasion("All")
  }else{
    SetselectedOccasion(occasionName);
  }
 
  }
  const handleBrandChange = (brand) => {
      if(brand==selectedBrand){
          setSelectedBrand("All")
      }else{
          setSelectedBrand(brand);
      }
    };
    const handleColorFiltering = (colorName)=>{ 
      if(colorName==selectedColor){
          setSelectedColor("All")
      }else{
          setSelectedColor(colorName);
      }   
    }

    const searchHandlar = (event)=>{
      const value= event.target.value;
      setSearchInput(value);
  
    }

  

    useEffect(() => {
      filterItems();
    }, [selectedBrand, selectedColor, selectedItem,selectedOccasion,searchInput]);


    const filterItems = () => {
      let NewfilteredItems = DataShop;
 
  
    if(searchInput != ""){
        NewfilteredItems = NewfilteredItems.filter((item)=>{
       
          return item.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
        })
    
      }

      if(selectedColor !=="All"){
        NewfilteredItems = NewfilteredItems.filter((item) => item.color === selectedColor);
   
      }
      if (selectedItem !== "All") {
       NewfilteredItems = NewfilteredItems.filter((item) => item.name === selectedItem);
      }
   
      if (selectedBrand !== "All") {
        NewfilteredItems = NewfilteredItems.filter((item) => item.brand === selectedBrand);
      }
      if (selectedOccasion !== "All") {
        NewfilteredItems = NewfilteredItems.filter((item) => item.category === selectedOccasion);
      }
      setselectedFilter(NewfilteredItems);
    };


    return(
      <div className='ParentDiv'>
      <div className='AllFilterContainer'> 
<div className="FilterSection">
<label className='BrandTitle'> Filter:</label> 

<div className='inputSearchField'>
<img src={search} className="searchImg" />
<input type='text' placeholder="Search" onChange={searchHandlar}  />
</div>
</div>

<div className='topContainer'> 


  <AccessoriesFiltering 
  accessoriesNames={accessoriesNames} 
  selectedItem={selectedItem} 
  handleCatagory={handleCatagory} 
  selectedOccasion={selectedOccasion}
  handleOccasionChange={handleOccasionChange}
  />

  <BagsFilterig 
  Bags={Bags}  
  selectedOccasion={selectedOccasion}
  handleOccasionChange={handleOccasionChange}
  handleCatagory={handleCatagory}
  selectedItem={selectedItem}
  />


  <ClothingFilter
  Clothing={Clothing}
  selectedOccasion={selectedOccasion}
  handleOccasionChange={handleOccasionChange}
  handleCatagory={handleCatagory}
  selectedItem={selectedItem}
  />

</div>


{/* Bottom sections */}
  <BrandsFilter 
  brandNames={brandNames}
  selectedBrand={selectedBrand}
  handleBrandChange={handleBrandChange}
  />

  <ColorFilter
  colors={colors}
  selectedColor={selectedColor}
  handleColorFiltering={handleColorFiltering}
    />

{/** Filtering section ends  */}
  </div>
 
  <div    className="catagoriesContent">
          {
              filteredItems.map((item, index)=>{
                return(  <Product  key={index} item={item} />
                )
              })
          }
  </div>
  </div>
    )
}
export default Catagories;