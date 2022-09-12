import React, { useState } from "react"
import AddingComment from "./AddingComment"

function EachMaterial ({material, addComment, handleDeleteComment, handleLikes}) {

    const [displayComment, setDisplayComment] =useState(false)

    function updateLikes() {
      const addLikes = {
        likes: material.likes + 1,
      };

      fetch(`http://localhost:9292/materials/${material.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(addLikes),
      })
        .then((res) => res.json())
        .then((handleLikes))
    }

    function showComment (event) {
        event.preventDefault();
        setDisplayComment(!displayComment)
    }

    function deleteComment(id) {
      fetch(`http://localhost:9292/comments/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => handleDeleteComment(data));
    }

    const eachComment = material.comments?.map((comment,index) => (
        <li className="list" key={index}>
          {/* <br /> */}
          <button className="delete" onClick={() => deleteComment(comment.id)}>
            ✖{" "}
          </button>
          {comment.text}
        </li>
      ));
    return (
        <div className="material">
        <h3>Name: {material.name}</h3>
        <h5>Source: {material.source}</h5>

        <button className="button" onClick={updateLikes}>
          Likes: {material.likes}
        </button>

        <button className="button" onClick={showComment}>
          {displayComment ? "Hide Comments" : "Show Comments"}
        </button>

        {displayComment ? <ul>{eachComment}</ul> : null}
        <AddingComment material={material} addComment={addComment} />


        </div>
    )
}

export default EachMaterial