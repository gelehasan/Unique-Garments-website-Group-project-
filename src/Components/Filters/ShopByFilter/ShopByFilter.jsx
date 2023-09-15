

const ShopByFilter = ({shopByNames,handleOccasionChange, selectedOccasion})=>{

    return(
        <div className='topSub'>

        <legend className='BrandTitle topTitles'> Shop by</legend> 
        <div className='BrandSelection catagoriesSelection'>
          <ul>
        <li onClick={() => handleOccasionChange("All")}
        className={`${ selectedOccasion == "All" ? "selectedCatagory": ""}`}
        tabIndex="0"
        >View All</li>
          {shopByNames.map((itemName)=>{
          return(<li key={itemName} onClick={()=> handleOccasionChange(itemName)}
          className={`${ selectedOccasion == itemName ? "selectedCatagory": ""}`}
          tabIndex="0"
          > {itemName}</li>) 
          }
          )
          }
          </ul>
        </div>
        </div>
    )
}


export default ShopByFilter;