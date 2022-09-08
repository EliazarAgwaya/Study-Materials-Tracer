import React, { useState } from "react"
import AddingComment from "./AddingComment"

function EachMaterial ({material, addComment}) {

    const [displayComment, setDisplayComment] =useState(false)

    function showComment (event) {
        event.preventDefault();
        setDisplayComment(!displayComment)
    }

    const eachComment = material.comments?.map((comment) => (
        <li key={material.id}>
          {/* <br /> */}
          <button>
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