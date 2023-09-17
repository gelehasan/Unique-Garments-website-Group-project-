import { shoesNames } from "../FiltersData";

const ShoesFilter = ({handleCatagory,selectedCatagory})=>{
   
  return(
      <div className='topSub'>
        <legend className='sectionTitle topTitles'>Shoes Category</legend> 
        <div className='BrandSelection catagoriesSelection'>
          <ul>
            {shoesNames.map((itemName) => {
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

export default ShoesFilter;
