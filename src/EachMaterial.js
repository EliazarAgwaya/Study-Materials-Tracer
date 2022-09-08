import React from "react"
import AddingComment from "./AddingComment"

function EachMaterial ({material}) {
    return (
        <div>
        <h3>Name: {material.name}</h3>
        <h5>Source: {material.source}</h5>
        </div>
    )
}

export default EachMaterial