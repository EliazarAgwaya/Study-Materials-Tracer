import React from "react"

function SearchBar ({searchTerm, onSearch}){
    return(
        <div>
            <input
                type="text"
                id="search"
                value={searchTerm}
                placeholder="The material you want"
                onChange={(event) => onSearch(event.target.value)}/>
        </div>
    )
}

export default SearchBar