import { GameContext } from "../../pages/Game/Game.jsx";
import { useState, createContext, useContext } from "react";
import "./MyCards.css"

const lilypadGreenSvg = "/assets/img/lilypad-green-color-assist.svg";
const lilypadRedSvg = "/assets/img/lilypad-red-color-assist.svg";
const lilypadYellowSvg = "/assets/img/lilypad-yellow-color-assist.svg";


function MyCards({objects}) {
    const gameData = useContext(GameContext);
    console.log("El color es " + gameData.color);

    if (!gameData.board) {
        return null;
      }
    
    return(
      
        <div className="mycards-container">
            <div> Mis cartas:</div>
            <div className="mycards-cartas"> 
                <div className="cartas"> 
                    <img src={lilypadYellowSvg} className="lilypad"/>
                    <div className="cantidad_carta"> {gameData.my_cards[0]} </div>
                    
                </div>

                <div className="cartas"> 
                    <img src={lilypadRedSvg} className="lilypad"/>
                    {gameData.my_cards[1]}
                </div>

                <div className="cartas"> 
                    <img src={lilypadGreenSvg} className="lilypad"/>
                    {gameData.my_cards[2]}
                </div>

            </div>
            
            <div> Mi color:</div>
            <div> 
                {objects[gameData.color - 1]}
                {gameData.color === 1 ? 'Amarillo' : gameData.color === 2 ? 'Rojo' : gameData.color === 3 ? 'Verde' : 'Color desconocido'}
            </div>
        </div>
    )
}

export default MyCards;


