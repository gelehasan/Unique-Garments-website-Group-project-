

const ShopByFilter = ({shopByNames,handleOccasionChange, selectedOccasion})=>{

    return(
        <div className='topSub'>

        <label className='BrandTitle topTitles'> Shop by</label> 
        <div className='BrandSelection catagoriesSelection'>
          <ul>
        <li onClick={() => handleOccasionChange("All")}
        className={`${ selectedOccasion == "All" ? "selectedCatagory": ""}`}
        >View All</li>
          {shopByNames.map((itemName)=>{
          return(<li key={itemName} onClick={()=> handleOccasionChange(itemName)}
          className={`${ selectedOccasion == itemName ? "selectedCatagory": ""}`}
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