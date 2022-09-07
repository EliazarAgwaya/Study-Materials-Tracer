import React from "react"
 function Form (){
    return(
        <div>
            <form>
                <h4>Add a new material here: </h4>

                <input
                type="text"
                placeholder="Material name"
                name="name"
                value="Material"
                ></input>
                <br />
                <input
                type="text"
                placeholder="Enter Source"
                name="Source"
                value="Source"
                ></input>
                <br />

                <input type="submit" />
            </form>
        </div>
    )
 }

 export default Form