import SearchBar from "./SearchBar"
import EachMaterial from "./EachMaterial"
function Materials ({materialsToDisplay, addComment, handleDeleteComment, comments, handleLikes, searchTerm, onSearch}){
    const materialList = materialsToDisplay.map((material) =>(
        <EachMaterial 
            key={material.id}
            material={material}
            addComment={addComment}
            comments ={comments}
            handleDeleteComment ={handleDeleteComment}
            handleLikes ={handleLikes}/>
    ))
    
    return(
        <div>
            <h5>Search here by book title to find a book you are looking for:</h5>
            <SearchBar searchTerm = {searchTerm} onSearch ={onSearch}/>

            <u>
                <h1>Study Materials</h1>
            </u>
            {materialList}
        </div>
    )
}

export default Materials