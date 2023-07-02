import "./GameBoard.css";
import { useState, createContext, useContext } from "react";
import { GameContext } from "../../pages/Game/Game.jsx";

import lilypadGreenSvg from "../../assets/img/lilypad-green-color-assist.svg";
import lilypadRedSvg from "../../assets/img/lilypad-red-color-assist.svg";
import lilypadYellowSvg from "../../assets/img/lilypad-yellow-color-assist.svg";


function GameBoard(props) {
  const gameData = useContext(GameContext);

  if (!gameData.board) {
    return null;
  }

  return (
    <div className="center-board"> 
      <div className="board">
          {gameData.board.map((row, rowIndex) =>
            row.map((color, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className={`cell color-${color}`}>
                {(color === 0 || color === 7 || color === 8 || color === 9 ) && (
                  <button id="piedra" onClick={() => props.toggle(rowIndex, colIndex)}></button>
                )}
                {(color === 1) && (
                  <img src={lilypadYellowSvg} className="lilypad"/>
                )}
                {(color === 2) && (
                  <img src={lilypadRedSvg} className="lilypad"/>
                )}
                {(color === 3) && (
                  <img src={lilypadGreenSvg} className="lilypad"/>
                )}
           
              </div>
            ))
          )}
      </div>
    </div>
  );
}

export default GameBoard; 