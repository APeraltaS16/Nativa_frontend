import { useState, createContext, useContext, useEffect } from "react";
import NavBar from "../../components/Navbar";
import GameBoard from "../../components/GameBoard/GameBoard";
import MyCards from "../../components/MyCards/MyCards";
import FrogImg from "../Carousel/FrogClass";
import GameScore from "../../components/GameScore/GameScore";
import "./Game.css"
import axios from "axios";
export const GameContext = createContext();
import API_URL from "../../config"

function Game() {

    let road_1 = [-1, -1]
    let road_2 = [-1, -1]
    let roadId = 0

    const sliderObjectsArray = {frogs: [
      <FrogImg src="src/assets/img/frog-yellow.svg" />,
      <FrogImg src='src/assets/img/frog-green.svg' />,
      <FrogImg src='src/assets/img/frog-red.svg' />,
    ]}


    const [gameData, setGameData] = useState({});
   
 

    // Para iniciar partida
    // useEffect(() => {
    //   axios.get(`${API_URL}/ready`) 
    //   .then((response) => {
    //     const updatedGameData = response.data[0];
    //     setGameData(updatedGameData);
    //   }).catch((error) => {
    //     console.log(error);
    //   })
    // }, [])

    // Funcion que permite comprar caminos. POST
    const buy_road = () => {
      console.log("Comprando camino");

      if (gameData.current_turn == gameData.playerId && gameData.dict_roads[roadId]) {
        axios.post(`${API_URL}/roads/buy`, {
          playerId: gameData.playerId,
          cards: gameData.my_cards,
          road: gameData.dict_roads[roadId],
          game_id: gameData.game_id
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
      if (gameData.current_turn == gameData.playerId) {

        axios.post(`${API_URL}/roads/buy`, {
          playerId: gameData.playerId,
          game_id: gameData.game_id
        })
          .then((response) => {
            //Me retorna el tablero y puntajes. Los actualizo
            const updatedGameData = {...gameData, my_cards:response, current_turn: response.current_turn };
            setGameData(updatedGameData);
          }).catch((error) => {
            console.log(error);
          })
      } else {
        console.log("No es tu turno");
      }
    } 


    // Funcion que maneja que caminos mandar. Manda los ultimos dos piedras
    const toggle = (rowIndex, colIndex) => {
      if (road_1[0] == -1) {
        road_1[0] = rowIndex
        road_1[1] = colIndex
      } else if (road_2[0] == -1) {
        road_2[0] = rowIndex
        road_2[1] = colIndex
      } else {
        road_1[0] = road_2[0]
        road_1[1] = road_2[1]
        road_2[0] = rowIndex
        road_2[1] = colIndex
      }
      roadId = [gameData.dict_nodes[road_1], gameData.dict_nodes[road_2]]
 
      console.log("Road 1: " + road_1);
      console.log("Road 1: " + road_2);
      console.log("El camino seleccionado es: " + roadId);
      

      if (gameData.dict_roads[roadId]) {
        console.log("El id de la ruta es: " + gameData.dict_roads[roadId]);
      }

    };
  
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
        </div>
        </>
    )
}
export default Game


   
// const [gameData, setGameData] = useState({
//   playerId: 2,
//   scoreId1: 0,
//   scoreId2: 0,
//   scoreId3: 0,
//   board: [
//       [0, "a", 0, "a", "a", 0, "v", 0],
//       ["r", -1, "v", -1, -1, "r", -1, "a"],
//       ["r", -1, "v", -1, -1, "r", -1, "a"],
//       [0, "r", 0, "a", "a", 0, "a", 0],
//       ["a", -1, "v", -1, -1, "v", -1, "v"],
//       ["a", -1, "v", -1, -1, "v", 0, "v"],
//       ["a", -1, 0, -1, -1, "v", "r", 0],
//       [0, "r", "r", "r", "r", 0, 0, -1],
//     ],
//   my_cards: [0, 0, 0],
//   current_turn: 2,
//   game_id: 1,
//   dict_nodes: 
//     {
//       '0,0': 1,
//       '0,2': 2,
//       '0,5': 3,
//       '0,7': 4,
//       '3,0': 5,
//       '3,2': 6,
//       '3,5': 7,
//       '3,7': 8,
//       '5,6': 9,
//       '6,2': 10,
//       '6,7': 11,
//       '7,0': 12,
//       '7,5': 13,
//       '7,6': 14,
//     },
//   dict_roads: {
//     '1,2': 1,
//     '2,3': 2,
//     '3,4': 3,
//     '1,5': 4,
//     '2,6': 5,
//     '3,7': 6,
//     '4,8': 7,
//     '5,6': 8,
//     '6,7': 9,
//     '7,8': 10,
//     '6,10': 11,
//     '8,11': 12,
//     '10,11': 13,
//     '5,12': 14,
//     '12,13': 15,
//     '9,14': 16,
//   }
// });