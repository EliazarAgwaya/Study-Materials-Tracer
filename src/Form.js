import React,{useState} from "react"
 function Form (addMaterial){
    const [newMaterial, setNewMaterial] = useState({
        name: "",
        source: "",
        likes: 0,
      });

      function handleChange (event) {
        const name=event.target.name;
        const value= event.target.value;
        setNewMaterial({...newMaterial, [name]: value})
      }
    return(
        <div>
            <form>
                <h4>Add a new material here: </h4>

                <input
                type="text"
                placeholder="Material name"
                name="name"
                value={newMaterial.name}
                onChange={handleChange}
                ></input>
                <br />
                <input
                type="text"
                placeholder="Enter Source"
                name="source"
                value={newMaterial.source}
                onChange={handleChange}
                ></input>
                <br />

                <input type="submit" />
            </form>
        </div>
    )
 }

 export default Form