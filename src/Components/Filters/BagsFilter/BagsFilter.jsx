


const BagsFilterig = ({Bags,handleCatagory,handleOccasionChange,selectedOccasion,selectedItem})=>{

    return(
        <div className='topSub'>

<label className='BrandTitle topTitles'> Bags</label> 
<div className='BrandSelection catagoriesSelection'>
  <ul>
    <li onClick={()=> handleOccasionChange("Bags")}  
     className={`${ selectedOccasion == "Bags" ? "selectedCatagory": ""}`}
    >
      View All</li>
  {Bags.map((itemName)=>{
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


export default BagsFilterig;