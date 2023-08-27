import Product from "../Products/Products";
import { useEffect, useState } from 'react';
import search from  '../../Assets/search.svg';
import AccessoriesFiltering from "../Filters/AccessoriesFIlter/Accessories";
import BagsFilterig from "../Filters/BagsFilter/BagsFilter";
import ClothingFilter from "../Filters/ClothingFilter/ClothingFilter";
import BrandsFilter from "../Filters/BrandsFilter/BrandsFilter";
import ColorFilter from "../Filters/ColorsFilter/ColorsFilter";
import './Categories.css';
import ShoesFilter from "../Filters/ShoesFilter/ShoesFilter";
const brandNames = ["Adidas", "Balenciaga", "Converse", "J.Crew", "Nike", "Off-white", "Rick Owens"];
const colors = ["Black", "purple","Blue", "Orange"];
const accessoriesNames=["Hats","Sunglasses", "Belts","Socks"];
const Bags = [ "Fanny Packs","Duffel Bags", "Backpacks"];
const Clothing = ["T-Shirts", "Outerwear", "Trousers", "Jeans", "Shorts", "Shirts"];
const shoesNames =[ "Dress Shoes","Sneakers","Slippers",]


const Catagories = ({DataShop,isGarmentsFilterOn, isShoesFilterOn})=>{
  const [filteredItems, setselectedFilter] = useState(DataShop);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedColor, setSelectedColor]= useState("All");
  const [selectedCatagory, setSelectedCatagory] = useState("All")
  const [selectedOccasion, SetselectedOccasion ] = useState("All");  
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [searchInput, setSearchInput] = useState("");    
  

  console.log(DataShop)

  const handleCatagory= (itemName)=>{
 
    if(itemName==selectedCatagory){
      setSelectedCatagory("All");
      console.log(itemName, selectedCatagory)
    }else{
      setSelectedCatagory(itemName)
    
    }
  }
  const handleOccasionChange = (groupName)=>
  {
    if(groupName==selectedGroup){
      setSelectedGroup("All")
  }else{
    setSelectedGroup(groupName);
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
    }, [selectedBrand, selectedColor, selectedCatagory,selectedGroup,searchInput]);


    const filterItems = () => {
      let NewfilteredItems = DataShop;
 
  
    if(searchInput != ""){
        NewfilteredItems = NewfilteredItems.filter((item)=>{
       
          return item.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
        })
    
      }

      if(selectedColor !=="All"){
        NewfilteredItems = NewfilteredItems.filter((item) => item.color === selectedColor);
   
      }
      if (selectedCatagory !== "All") {
       NewfilteredItems = NewfilteredItems.filter((item) => item.category === selectedCatagory);
      }
   
      if (selectedBrand !== "All") {
        NewfilteredItems = NewfilteredItems.filter((item) => item.brand === selectedBrand);
      }
      if (selectedGroup !== "All") {
        NewfilteredItems = NewfilteredItems.filter((item) => item.group === selectedGroup);
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

{ isGarmentsFilterOn &&
  <AccessoriesFiltering 
  accessoriesNames={accessoriesNames} 
  selectedCatagory={selectedCatagory} 
  handleCatagory={handleCatagory} 
  selectedGroup={selectedGroup}
  handleOccasionChange={handleOccasionChange}
  />
}
  
{ isGarmentsFilterOn &&
  <BagsFilterig 
  Bags={Bags}  
  selectedGroup={selectedGroup}
  handleOccasionChange={handleOccasionChange}
  handleCatagory={handleCatagory}
  selectedCatagory={selectedCatagory}
  />
}
{ isGarmentsFilterOn &&
  <ClothingFilter
  Clothing={Clothing}
  selectedGroup={selectedGroup}
  handleOccasionChange={handleOccasionChange}
  handleCatagory={handleCatagory}
  selectedCatagory={selectedCatagory}
  />
}

{isShoesFilterOn && 
  <ShoesFilter
  shoesNames={shoesNames} 
  handleCatagory={handleCatagory}
  selectedCatagory={selectedCatagory}
  
  />}
  
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