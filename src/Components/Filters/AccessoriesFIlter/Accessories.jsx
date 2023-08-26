

const AccessoriesFiltering = ({accessoriesNames, selectedItem,handleCatagory, selectedOccasion,handleOccasionChange})=>{

    return(
        <div className='topSub'>
  

<label className='BrandTitle topTitles'> Accessories</label> 
<div className='BrandSelection catagoriesSelection'>
  <ul>
    <li onClick={()=> handleOccasionChange("Accessories")}  
     className={`${ selectedOccasion == "Accessories" ? "selectedCatagory": ""}`}
    >
      View All</li>
  {accessoriesNames.map((itemName)=>{
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


export default AccessoriesFiltering;
