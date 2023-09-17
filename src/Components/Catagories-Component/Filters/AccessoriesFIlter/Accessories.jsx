import { Link } from "react-router-dom";
import { accessoriesNames } from "../FiltersData";
const AccessoriesFiltering = ({ selectedCatagory,handleCatagory, selectedGroup,handleGroupChange})=>{

    return(
      <div className='topSub'>
      <legend className='sectionTitle topTitles'>Accessories</legend> 
      <div className='BrandSelection catagoriesSelection'>
        <ul>
          <li 
            onClick={() => handleGroupChange("Accessories")}  
            className={`${selectedGroup === "Accessories" ? "selectedCatagory" : ""}`}
            tabIndex="0"
          > 
            View All
          </li>
          
          {accessoriesNames.map((itemName) => {
            return (
              <li  
                key={itemName} 
                onClick={() => handleCatagory(itemName)}
                className={`${selectedCatagory === itemName ? "selectedCatagory" : ""}`}
                tabIndex="0"
              > 
                {itemName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    
    )
}


export default AccessoriesFiltering;
