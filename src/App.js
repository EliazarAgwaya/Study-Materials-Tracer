import React, {useState, useEffect} from "react"
import './App.css';
import Materials from './Materials';
import Form from './Form';
import NavBar from './NavBar';
import Home from './Home';
import { Route, Routes } from "react-router-dom";


function App() {

  const [materials, setMaterials] =useState([]);
  const [comments, setComments] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/materials")
      .then((res) => res.json())
      .then((data) => {
        setMaterials(data)
      })
  },[]);

  function addMaterial (newMaterial) {
    const updatedMaterials = [newMaterial, ...materials]
    setMaterials(updatedMaterials)
  }

  function addComment(newComment) {
    const materialToReview = materials.find((material) => {
      return material.id === newComment.material_id
    })

    const updatedComments = [newComment, ...materialToUpdate.comments];
    materialToUpdate.materials = updatedComments;
    setMaterials(materials.map((material) => (material.id === materialToUpdate.id ? materialToUpdate : material)));
    setComments(updatedComments)
  }

  function handleDeleteComment (deletedComment) {
    const materialToUpdate = materials.find((material) => {
      return material.id === deletedComment.material_id
    })

    const updatedMaterial = materialToUpdate.materials.filter((material) => {
      return material.id !==deletedComment.id
    })

    materialToUpdate.materials = updatedMaterial;
    setMaterials(materials.map((material) =>(material.id === materialToUpdate.id ? materialToUpdate : material)))
    setMaterials(updatedMaterial)
  }

  const materialsToDisplay = materials.filter((material) => {
    return material.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/materials" element={<Materials 
          materials ={materials}
          materialsToDisplay={materialsToDisplay}/>} 
          addComment ={addComment} handleDeleteComment={handleDeleteComment} 
          comments = {comments}/>
        <Route exact path="/form" element={<Form 
          addMaterial ={addMaterial}/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
