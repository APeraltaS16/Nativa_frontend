import './App.css'
import NavBar from './components/Navbar'
import landing_img from './assets/fondo.png'
import axios from 'axios'; 
import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import API_URL from "./config"

function App() {
  const [selectedGameId, setSelectedGameId] = useState(null);
  const handleGameSelection = (gameId) => {
    console.log(gameId);
    setSelectedGameId(gameId);
  };
  const navigate = useNavigate();


  useEffect(() => {
    if (selectedGameId) {
      navigate('/searchgame');
      axios.get(`${API_URL}/games/${selectedGameId}`)
        .then((response) => {
          console.log(response);
          if (response.ingresar) {
            navigate('/searchgame');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedGameId]);

  return (
    <>
    <NavBar/>

    <div className="main-container">
      
      <h1 className='title'>Frog Game</h1>
      <img className="imagen-principal" src={landing_img}/>
      <div className="ayuda-rana">AYUDA A TU RANA A ENCONTRAR EL CAMINO!</div>
     
  
      <div className="dropdown">
        <button className="dropbtn">Buscar ranas</button>
        <div className="dropdown-content">
            <a href="#" onClick={() => handleGameSelection(1)}>Partida 1</a>
            <a href="#" onClick={() => handleGameSelection(2)}>Partida 2</a>
            <a href="#" onClick={() => handleGameSelection(3)}>Partida 3</a>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
