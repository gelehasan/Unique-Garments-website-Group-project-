

const ClothingFilter = ({Clothing,handleCatagory,selectedCatagory,selectedGroup,handleGroupChange})=>{
    return(
        <div className='topSub'>

<legend className='BrandTitle topTitles'> Clothing</legend> 
<div className='BrandSelection catagoriesSelection'>
  <ul>
    <li onClick={()=> handleGroupChange("Clothing")}  
    className={`${ selectedGroup == "Clothing" ? "selectedCatagory": ""}`}
    tabIndex="0"
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