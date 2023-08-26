

const ClothingFilter = ({Clothing,handleCatagory,selectedItem,selectedOccasion,handleOccasionChange})=>{
    return(
        <div className='topSub'>

<label className='BrandTitle topTitles'> Clothing</label> 
<div className='BrandSelection catagoriesSelection'>
  <ul>
    <li onClick={()=> handleOccasionChange("Clothing")}  
    className={`${ selectedOccasion == "Clothing" ? "selectedCatagory": ""}`}
    >View All</li>
  {Clothing.map((itemName)=>{
  return(<li key={itemName} onClick={()=> handleCatagory(itemName)}
  className={`${ selectedItem == itemName ? "selectedCatagory": ""}`}
  > {itemName}</li>) 
  }
  )
  }
  </ul>
</div>
</div>
    )
}


export default ClothingFilter;