import Product from "../Products/Products";
import FilterOptions from "../ProductFilters/FilterOptions";
import DataShop from '../../data';
import './Categories.css';
import { useState, useEffect } from "react";

const colorFilters= ["All","white","black", "Green"];

const catagoryFilters= ["All","shirt","T-shirt","kids", ];
const typeFilters=["All","A", "B"];

const Catagories = ()=>{
    
 const [selectedFilter, setselectedFilter] = useState(DataShop);
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

    const filterHandlar = (event) => {
        const optionValue = event.target.value;
        const selectedName = event.target.name;
    
        if (selectedName === "color") {
          setSelectedColor(optionValue);
        } else if (selectedName === "catagory") {
          setSelectedCategory(optionValue);
        } else if (selectedName === "type") {
          setSelectedType(optionValue);
        }
      };
      

      useEffect(() => {
        filterItems();
      }, [selectedColor, selectedCategory, selectedType]);


  const filterItems = () => {
    let filteredItems = DataShop;

    if (selectedColor !== "All") {
      filteredItems = filteredItems.filter((item) => item.color === selectedColor);
    }

    if (selectedCategory !== "All") {
      filteredItems = filteredItems.filter((item) => item.catagory === selectedCategory);
    }
    
    if (selectedType !== "All") {
      filteredItems = filteredItems.filter((item) => item.type === selectedType);
    }

    setselectedFilter(filteredItems);
  };



console.log(selectedFilter)
    return(
        <div    className="catagories">
             <h2>Colors</h2>
     <select id="color-filter" name="color" onChange={filterHandlar}>
    {   colorFilters.map((options,index)=>(
        <option key={index} value={options}> {options}</option>
        ))
    }
  
  
        </select>
        <h2>Catagories</h2>
        <select id="catagory-filter" name="catagory" onChange={filterHandlar}>
    {   catagoryFilters.map((options,index)=>(
        <option key={index} value={options}>{options}</option>
        ))
    }
        </select>


        <h2>Type</h2>
    <select id="type-filter" name="type" onChange={filterHandlar}>
    {   typeFilters.map((options,index)=>(
        <option key={index} value={options}>{options}</option>
        ))
    }
        </select>
    
  
        <div    className="catagoriesContent">
            {
                selectedFilter.map((item)=>{
                  return(  <Product  key={item.id} item={item} />
                  )
                })
            }
   </div>
        </div>
    )
}
export default Catagories;