import "../styles/SearchGame.css"
import rana_verde from '../assets/img/frog-green.svg'
import rana_roja from '../assets/img/frog-red.svg'
import rana_amarilla from '../assets/img/frog-yellow.svg'
import NavBar from '../components/Navbar'
import { useState, createContext, useContext} from "react";
import {useNavigate } from 'react-router-dom';
import { useEffect} from "react"
import axios from "axios"
import API_URL from "../config"

function SearchGame() {

      const [searchGameData, setsearchGameData] = useState({})

      useEffect(() => {
        axios.get(`${API_URL}/search`)
        .then((response) => {
          const updatedGameData = response.data[0];
          setsearchGameData(updatedGameData);
        }).catch((error) => {
          console.log(error);
        })
      }, [])

      const navigate = useNavigate();

      useEffect(() => {
        if (searchGameData.players_in === 3) {
          navigate('/game');
        }
      }, [searchGameData.players_in, navigate]);
      
    return(
        <> 
        <NavBar/>

        <div id="search-container">
            <div className="titulo-search">
                <h1> Buscando Ranas...</h1>
            </div>

            <div id="resumen">
                <p> Frog game, es un juego de cartas cuyo objetivo es sumar el mayor numero de puntos posibles. Pueden conseguirse puntos de las 
                    siguientes formas: Cubriendo un Recorrido entre 2 Piedras adyacentes en el mapa o Completando la Ruta de hojas Más Larga
                    .Para mayor información ir a la sección instrucciones
                </p>
            </div>


            <div className="jugadores-container">
                <div className="jugador">

                    <div className="imagen">
                        <img className="imagen" src={rana_amarilla}/>
                    </div>
                    <div className="texto">
                        <h3>{searchGameData.name1}</h3>
                    </div>

                </div>


                <div className="jugador">
                
                    <div className="imagen">
                        <img className="imagen" src={rana_roja}/>
                    </div>

                    <div className="texto">
                        <h3>{searchGameData.name2}</h3>
                    </div>

                </div>

                <div className="jugador">
                
                    <div className="imagen">
                        <img className="imagen" src={rana_verde}/>
                    </div>

                    <div className="texto">
                        <h3>{searchGameData.name3}</h3>
                    </div>

                </div>


            </div>

        </div>
        </>
    )
}

export default SearchGame



    // const [searchGameData, setsearchGameData] = useState({
    //     gameId: 1,
    //     players_in: 3,
    //     playerId: 1,
    //     name1: "naranjian",
    //     color1: 0,
    //     name2: "esperando jugador ...",
    //     color2: 1,
    //     name3: "esperando jugador ...",
    //     color3: 2,
    //   });