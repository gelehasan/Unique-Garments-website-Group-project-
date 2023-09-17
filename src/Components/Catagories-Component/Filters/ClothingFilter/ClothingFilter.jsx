import { clothingNames } from "../FiltersData";

const ClothingFilter = ({handleCatagory,selectedCatagory,selectedGroup,handleGroupChange})=>{
   
  return(
    <div className='topSub'>
      <legend className='sectionTitle topTitles'>Clothing</legend> 
      <div className='BrandSelection catagoriesSelection'>
        <ul>
          <li 
            onClick={() => handleGroupChange("Clothing")}  
            className={`${selectedGroup === "Clothing" ? "selectedCatagory" : ""}`}
            tabIndex="0"
          >
            View All
          </li>
          {clothingNames.map((itemName) => {
            return (
              <li 
                key={itemName} 
                onClick={() => handleCatagory(itemName)}
                className={`${selectedCatagory === itemName ? "selectedCatagory" : ""}`}
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


export default ClothingFilter;