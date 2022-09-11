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

      function handleSubmit(event) {
        event.preventDefault();

        const addNewComment = {
          text: newComment.text,
          material_id: newComment.material_id
        };
      }
    return(
        <div>
          <form>
            <h5>Add a comment here: </h5>

            <textarea
            type="text"
            placeholder="Enter Comment"
            name="text"
            value={newComment.text}
            onChange={handleChange}
            ></textarea>

            <br />
            <input className="button" type="submit" />
           </form>
        </div>
    )
}

export default AddingComment