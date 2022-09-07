import React from "react"
import './App.css';
import Materials from './Materials';
import Form from './Form';
import NavBar from './NavBar';
import Home from './Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/materials" element={<Materials/>} />
        <Route exact path="/form" element={<Form/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
