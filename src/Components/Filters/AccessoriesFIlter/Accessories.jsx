

const AccessoriesFiltering = ({accessoriesNames, selectedCatagory,handleCatagory, selectedGroup,handleGroupChange})=>{

    return(
        <div className='topSub'>
  

<label className='BrandTitle topTitles'> Accessories</label> 
<div className='BrandSelection catagoriesSelection'>
  <ul>
    <li onClick={()=> handleGroupChange("Accessories")}  
     className={`${ selectedGroup == "Accessories" ? "selectedCatagory": ""}`}
    > View All</li>
  {accessoriesNames.map((itemName)=>{
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


export default AccessoriesFiltering;