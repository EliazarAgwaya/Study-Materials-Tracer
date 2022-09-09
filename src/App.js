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
    const materialToUpdate = materials.find((material) => {
      return material.id === newComment.material_id
    })

    const updatedComments = [newComment, ...materialToUpdate.comments];
    materialToUpdate.comments = updatedComments;
    setMaterials(materials.map((material) => (material.id === materialToUpdate.id ? materialToUpdate : material)));
    setComments(updatedComments)
  }

  function handleLikes(likes) {
    const updatedLikes = materials.map((material) => {
      return material.id === likes.id ? likes : material
    })
    setMaterials(updatedLikes)
  }

  function handleDeleteComment (deletedComment) {
    const materialToUpdate = materials.find((material) => {
      return material.id === deletedComment.material_id
    })

    const updatedComment = materialToUpdate.comments.filter((comment) => {
      return comment.id !==deletedComment.id
    })

    materialToUpdate.comments = updatedComment;
    setMaterials(materials.map((material) =>(material.id === materialToUpdate.id ? materialToUpdate : material)))
    setComments(updatedComment)
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
          materialsToDisplay={materialsToDisplay} 
          handleLikes ={handleLikes}/>} 
          addComment ={addComment} handleDeleteComment={handleDeleteComment} 
          comments = {comments}
          searchTerm ={searchTerm}
          onSearch={setSearchTerm}/>
        <Route exact path="/form" element={<Form 
          addMaterial ={addMaterial}/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
