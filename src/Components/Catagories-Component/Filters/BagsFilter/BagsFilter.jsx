import { bagsNames } from "../FiltersData";

const BagsFilterig = ({handleCatagory,handleGroupChange,selectedGroup,selectedCatagory})=>{

    return(
      <div className='topSub'>
        <legend className='sectionTitle topTitles'>Bags</legend> 
        <div className='BrandSelection catagoriesSelection'>
          <ul>
            <li 
              onClick={() => handleGroupChange("Bags")}  
              className={`${selectedGroup === "Bags" ? "selectedCatagory" : ""}`}
              tabIndex="0"
            >
              View All
            </li>
            {bagsNames.map((itemName) => {
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


export default BagsFilterig;