import { shopByNames } from "../FiltersData";

const ShopByFilter = ({setSelectedOccasion,selectedOccasion})=>{

  const handleOccasionChange = (occasionName)=> {

  if(selectedOccasion== occasionName){
      setSelectedOccasion("All")
  }else{
   setSelectedOccasion(occasionName);
  }
 
  }

    return(
      <div className='topSub'>
        <legend className='sectionTitle topTitles'>Shop by</legend> 
        <div className='BrandSelection catagoriesSelection'>
          <ul>
            <li 
              onClick={() => handleOccasionChange("All")}
              className={`${selectedOccasion === "All" ? "selectedCatagory" : ""}`}
              tabIndex="0"
            >
              View All
            </li>
            {shopByNames.map((itemName) => {
              return (
                <li 
                  key={itemName} 
                  onClick={() => handleOccasionChange(itemName)}
                  className={`${selectedOccasion === itemName ? "selectedCatagory" : ""}`}
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


export default ShopByFilter;