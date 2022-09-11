import React from "react"

function SearchBar ({searchTerm, handleSearch}){
    return(
        <div>
            <input
                type="text"
                id="search"
                value={searchTerm}
                placeholder="The material you want"
                onChange={(event) => handleSearch(event.target.value)}/>
        </div>
    )
}

export default SearchBar