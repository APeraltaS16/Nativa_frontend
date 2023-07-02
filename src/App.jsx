import './App.css'
import NavBar from './components/Navbar'
import landing_img from './../public/assets/fondo.png'
import {useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleGameSelection = (gameId) => {
    navigate(`/searchgame/${gameId}`);
  };
  
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
