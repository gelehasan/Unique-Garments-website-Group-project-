import searchIcon from "../../../../Assets/search.svg"


const SearchFilter= ({setSearchInput, HandleFIlterVisibility})=>{

    const searchInputHandlar = (event)=>{
        const value= event.target.value;
        setSearchInput(value);
      }
  
    return(
    <div className="SearchFilterSection">
    <label className='sectionTitle filtertitle' htmlFor="searchInput">Filter:</label> 

    <div className='inputSearchField'>
        <img src={searchIcon} className="searchImg" alt="Image showing this is search input field"/>
        <input type='text' placeholder="Search" name="searchInput" onChange={searchInputHandlar} />
    </div>

    <button className="btnFilterSmallScreen" onClick={HandleFIlterVisibility}>Filter</button>
    </div>

    )
}


export default SearchFilter;