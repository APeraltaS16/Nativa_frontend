import { useState, createContext, useContext, useEffect } from "react";
import NavBar from "../../components/Navbar";
import GameBoard from "../../components/GameBoard/GameBoard";
import MyCards from "../../components/MyCards/MyCards";
import FrogImg from "../Carousel/FrogClass";
import GameScore from "../../components/GameScore/GameScore";
import "./Game.css"
import axios from "axios";
export const GameContext = createContext();
import AuthContext from "../../auth/AuthContext";
import {useNavigate } from 'react-router-dom';


function Game() {
    const { playerId, token } = useContext(AuthContext);
    const [stone_1, setStone1] = useState([-1, -1]);
    const [stone_2, setStone2] = useState([-1, -1]);
    const [roadId, setRoadId] = useState(null);
    const navigate = useNavigate();


    const sliderObjectsArray = {frogs: [
      <FrogImg src="src/assets/img/frog-yellow.svg" />,
      <FrogImg src='src/assets/img/frog-red.svg' />,
      <FrogImg src='src/assets/img/frog-green.svg' />,
    ]}


    const [gameData, setGameData] = useState({});
 
    const actualizarBoard = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/boards/update`, {
          userid: playerId
        }, {
          'headers': {
              'Authorization': `Bearer ${token}`
          },
        });
        const updatedGameData = response.data;
        setGameData(updatedGameData);

        //Comentar en caso de que no funcione
        if (updatedGameData.gameOver) {
          navigate(`/`);
        }
        
        console.log(updatedGameData);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    actualizarBoard();
      const interval = setInterval(() => {
        console.log("actualizando tablero");
        actualizarBoard();
      }, 3000);
      return () => {
          clearInterval(interval);
      };

    }, []);

    // Funcion que permite comprar caminos. POST
    const buy_road = () => {
      console.log("Comprando camino numero: " + roadId);
     
      if (gameData.current_turn == gameData.color && roadId) {
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/roads/buy`, {
          userid: playerId,
          road: roadId,
        })
        .then((response) => {
          const updatedGameData = {...gameData, board: response.data.board, scoreId1: response.data.scoreId1, scoreId2: response.data.scoreId2, scoreId3: response.data.scoreId3, current_turn: response.current_turn };
          setGameData(updatedGameData);
        }).catch((error) => {
          console.log(error);
        })
      } else {
        console.log("No es tu turno o no seleccionaste ruta");
      }
    }
    // Funcion que permite robar cartas
    const buy_card = () => {
      console.log("Robando cartas");
      console.log("mi user id es" + playerId);
      console.log("mi color es" + gameData.color);

      if (gameData.current_turn == gameData.color) {

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/cards/buy`, {
          userid: playerId,
        }, {
          'headers': {
            'Authorization': `Bearer ${token}`
        },
        })
          .then((response) => {
            console.log(response);
          }).catch((error) => {
            console.log(error);
          })
      } else {
        console.log("No es tu turno");
      }
    } 

    const paint_stone = () => {
      console.log("Pintando piedras");
      let id_piedra_actual = -1;
      //mejorar esto. Caso de que el primero sea seleccionado.
      if (stone_1[0] != -1 && stone_2[0] == -1) {
        id_piedra_actual = gameData.dict_nodes[stone_1];
      } else if (stone_1[0] != -1 && stone_2[0] != -1) {
        id_piedra_actual = gameData.dict_nodes[stone_2];
      }
      console.log("La piedra elegida es: " + id_piedra_actual);
      if (gameData.current_turn == gameData.color && id_piedra_actual != -1) {
        console.log("Enviando piedra");
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/nodes/paint`, {
          userid: playerId,
          nodeid: id_piedra_actual
        })
          .then((response) => {
            console.log(response);

          }).catch((error) => {
            console.log(error);
          })
      } else {
        console.log("No es tu turno o no elegiste tu piedra");
      }
    }

    // Funcion que maneja que caminos mandar. Manda los ultimos dos piedras
    const toggle = (rowIndex, colIndex) => {
      if (stone_1[0] == -1) {
        setStone1([rowIndex, colIndex]);
      } else if (stone_2[0] == -1) {
        setStone2([rowIndex, colIndex]);
      } else {
        setStone1([stone_2[0], stone_2[1]]);
        setStone2([rowIndex, colIndex]);
      }
      
    };
    useEffect(() => {
      // Cuando gameData cambie, actualiza stone1, stone2 y roadId
      if (gameData && gameData.dict_nodes && gameData.dict_roads) {
        const newRoadId = gameData.dict_roads[[gameData.dict_nodes[stone_1], gameData.dict_nodes[stone_2]]];
    
        if (!newRoadId) {
          setRoadId(gameData.dict_roads[[gameData.dict_nodes[stone_2], gameData.dict_nodes[stone_1]]]);
        } else {
          setRoadId(newRoadId);
        }
      }
      console.log(stone_1);
      console.log(stone_2);
    }, [gameData, stone_1, stone_2]);
  
    return(
        <> 
        <GameContext.Provider value={gameData}>
            <NavBar/>

            {gameData.playerId === gameData.current_turn ? (<h1>Es tu turno!</h1>) : (
              <h1>
                Turno del jugador{" "}
                {gameData.current_turn === 1
                  ? "amarillo"
                  : gameData.current_turn === 2
                  ? "rojo"
                  : gameData.current_turn === 3
                  ? "verde"
                  : ""}
              </h1>

            )}
            <div className="board-score-container"> 
              <GameBoard toggle={toggle}/>  
              <GameScore objects={sliderObjectsArray.frogs}/>
            </div>
            <MyCards objects={sliderObjectsArray.frogs}/>
        </GameContext.Provider>

        <div className="botones-partida">
          <button className="jugar" onClick={buy_card}>Robar carta</button>
          <button className="jugar" onClick={buy_road}>Comprar camino</button>
          <button className="jugar" onClick={paint_stone}>Pintar Piedra</button>

        </div>
        </>
    )
}
export default Game
