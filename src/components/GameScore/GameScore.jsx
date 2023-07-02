import { useState, createContext, useContext } from "react";
import { GameContext } from "../../pages/Game/Game.jsx";
import "./GameScore.css"

function GameScore({objects}) {
    const gameData = useContext(GameContext);
    return(
        <> 
            <div className="score-container">
                <div> Puntajes:</div>
    
                <div className="score">
                    <div className="score-img"> {objects[0]}</div>
                    <div className="score-number"> {gameData.scoreId1}</div>

                </div>
                
                <div className="score">
                    <div className="score-img"> {objects[1]}</div>
                    <div className="score-number"> {gameData.scoreId2} </div>

                </div>

                <div className="score">
                    <div className="score-img"> {objects[2]}</div>
                    <div className="score-number"> {gameData.scoreId3}</div>
                </div>
            </div>
        </>
    )
}


export default GameScore;