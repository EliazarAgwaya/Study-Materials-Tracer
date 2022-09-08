import React, {useState, useEffect} from "react"
import './App.css';
import Materials from './Materials';
import Form from './Form';
import NavBar from './NavBar';
import Home from './Home';
import { Route, Routes } from "react-router-dom";


function App() {

  const [materials, setMaterials] =useState([]);
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

  const materialsToDisplay = materials.filter((material) => {
    return material.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/materials" element={<Materials 
          materials ={materials}
          materialsToDisplay={materialsToDisplay}/>} />
        <Route exact path="/form" element={<Form 
          addMaterial ={addMaterial}/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
