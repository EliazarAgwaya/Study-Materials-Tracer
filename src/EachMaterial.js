import React, { useState } from "react"
import AddingComment from "./AddingComment"

function EachMaterial ({material, addComment, handleDeleteComment}) {

    const [displayComment, setDisplayComment] =useState(false)

    function showComment (event) {
        event.preventDefault();
        setDisplayComment(!displayComment)
    }

    function deleteComment(id) {
      fetch(`http://localhost:9292/comments/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then((res) => res.json())
        .then((data) => handleDeleteComment(data));
    }

    const eachComment = material.comments?.map((comment) => (
        <li key={material.id}>
          {/* <br /> */}
          <button onClick={() => deleteComment(comment.id)}>
            ✖{" "}
          </button>
          {comment.text}
        </li>
      ));
    return (
        <div>
        <h3>Name: {material.name}</h3>
        <h5>Source: {material.source}</h5>

        <button onClick={showComment}>
          {displayComment ? "Hide Comments" : "Show Comments"}
        </button>

        {displayComment ? <ul>{eachComment}</ul> : null}
        <AddingComment material={material} addComment={addComment} />


        </div>
    )
}

export default EachMaterial