import React, {useState} from "react"

function AddingComment ({addComment, material}) {

    const [newComment, setNewComment] = useState({
        text: "",
        material_id: material.id,
      });
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setNewComment({ ...newComment, [name]: value });
      };
    return(
        <div>

        </div>
    )
}

export default AddingComment