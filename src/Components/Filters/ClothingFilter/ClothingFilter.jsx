

const ClothingFilter = ({Clothing,handleCatagory,selectedCatagory,selectedGroup,handleGroupChange})=>{
    return(
        <div className='topSub'>

<label className='BrandTitle topTitles'> Clothing</label> 
<div className='BrandSelection catagoriesSelection'>
  <ul>
    <li onClick={()=> handleGroupChange("Clothing")}  
    className={`${ selectedGroup == "Clothing" ? "selectedCatagory": ""}`}
    >View All</li>
  {Clothing.map((itemName)=>{
  return(<li key={itemName} onClick={()=> handleCatagory(itemName)}
  className={`${ selectedCatagory == itemName ? "selectedCatagory": ""}`}
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