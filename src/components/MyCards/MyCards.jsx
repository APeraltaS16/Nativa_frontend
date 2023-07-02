import { GameContext } from "../../pages/Game/Game.jsx";
import { useState, createContext, useContext } from "react";
import "./MyCards.css"

import lilypadGreenSvg from "../../assets/img/lilypad-green-color-assist.svg";
import lilypadRedSvg from "../../assets/img/lilypad-red-color-assist.svg";
import lilypadYellowSvg from "../../assets/img/lilypad-yellow-color-assist.svg";


function MyCards({objects}) {
    const gameData = useContext(GameContext);
    
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
                {objects[gameData.playerId]}
            </div>
        </div>
    )
}

export default MyCards;


