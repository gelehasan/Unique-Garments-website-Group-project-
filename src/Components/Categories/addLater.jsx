
import { useState, useEffect } from "react";

const colorFilters= ["All","white","black", "Green"];

const catagoryFilters= ["All","shirt","T-shirt","kids", ];
const typeFilters=["All","A", "B"];
/** Saving them for later */
const AddLater = ()=>{


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

    return(
        <div>

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
    </div>
  
            </div>
    )
}