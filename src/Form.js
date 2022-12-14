import React,{useState} from "react"
import { useNavigate } from "react-router-dom";

 function Form (addMaterial){

    let navigate = useNavigate();
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

      function handleSubmit (event) {
        event.preventDefault();
        const addNewMaterial = {
            name: newMaterial.name,
            source: newMaterial.source,
            likes: 0,
        }
        fetch("https://study-material-tracer-backend.herokuapp.com/materials", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addNewMaterial),
        })
            .then((res) => res.json())
            .then((addMaterial));
            setNewMaterial({
                name: "",
                source: "",
                likes: 0,
            });
            navigate.push("/materials")
      }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h4 id="add">Add a new material here: </h4>

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

                <input id="like" className="button" type="submit" />
            </form>
        </div>
    )
 }

 export default Form