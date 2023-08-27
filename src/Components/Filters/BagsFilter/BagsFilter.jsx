


const BagsFilterig = ({Bags,handleCatagory,handleOccasionChange,selectedGroup,selectedCatagory})=>{

    return(
        <div className='topSub'>

<label className='BrandTitle topTitles'> Bags</label> 
<div className='BrandSelection catagoriesSelection'>
  <ul>
    <li onClick={()=> handleOccasionChange("Bags")}  
     className={`${ selectedGroup == "Bags" ? "selectedCatagory": ""}`}
    >
      View All</li>
  {Bags.map((itemName)=>{
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


export default BagsFilterig;