import React, {useState} from "react";
import NavBar from '../../components/Navbar'
import './instructions.css'
import Slider from "../Carousel/Slider";
import Rules from "../Carousel/RuleClass";
import FrogImg from "../Carousel/FrogClass";

function Instructions() {

    

    const [displayRules, setdisplayRules] = useState(false)

    const sliderObjectsArray = {frogs: [
        <FrogImg src="src/assets/img/frog-yellow.svg" />,
        <FrogImg src='src/assets/img/frog-green.svg' />,
        <FrogImg src='src/assets/img/frog-red.svg' />,
    ], rules: [
        <Rules index = "1" title="Objetivo del juego" text="El objetivo del juego es sumar el mayor numero de puntos posibles. Pueden conseguirse puntos de las 
        siguientes formas:"/>,
        <Rules index = "2" title="Objetivo del juego" text="1.Cubriendo un Recorrido entre 2 Piedras adyacentes en el mapa"/>,
        <Rules index = "3" title="Objetivo del juego" text="2.Completando la Ruta de hojas Más Larga, para esto es necesario que todas las hojas que se cuenten 
        esten conectadas y solo se cuenta 1 vez cada hoja"/>,
        <Rules index = "4" title="Preparacion" text="Todos los jugadores eligen el color de su Rana, luego cada jugador recibe 4 cartas de hojas y 25 hojas selectivas de un jugador"/>,
        <Rules index = "5" title="Turno de Juego" text="Aleatoreamente se selecciona el jugador que empieza. En su turno cada jugador de realizar una y solo una
         de las siguientes acciones."/>,   
        <Rules index = "6" title="Turno de Juego" text="1.Robar carta de hoja: un jugador puede robar 2 cartas de hoja boca arriba o abajo, o solo una si es una 
        hoja multicolor" src='src/assets/img/carta_roja.png'/>,
        <Rules index = "7" title="Turno de Juego" text="2.Cubrir un Recorrido: Un jugador puede cubrir un recorrido del tablero jugando la cantidad cartas del mismo color que la cantidad de hojas de ese colo que hay en ese Recorrido."/>,
        <Rules index = "8" title="Hojas" text="Existen 2 tipos de hojas. Las hojas de colores solo sirven para canjearlas por un Recorrido de ese color, la hoja 
        multicolor permite ocuparse como 'BONUS' para completar un Recorrido."/>, 
        <Rules index = "9" title="Cubrir Recorrido" text="Para cubrir un recorrido es necesario cangear la cantidad de cartas de hojas del recorrido del color 
        de este. En el caso que el recorrido sea griz este puede ser completado por cualquier color de hoja, siendo este color unico. Es decir no se puede cangear un recorrido griz con mas de un color. "/>, 
        <Rules index = "10" title="Cubrir Recorrido" text="Los recorridos deben cubrirse totalmente en un solo turno. No se puede,
        por ejemplo, colocar dos hojas en un recorrido de tres espacios y
        esperar al siguiente turno para colocar la tercera hoja."/>, 
        <Rules index = "11" title="Recorridos Dobles" text="Algunas Piedras están conectadas por Recorridos Dobles. Estos son recorridos que conectan
        las mismas piedras y cuyos espacios son paralelos e iguales en número. Un jugador no puede
        cubrir los dos recorridos entre las mismas ciudades durante el transcurso de una partida."/>, 
        <Rules index = "12" title="Final del juego" text="Cuando la reserva de hojas de un jugador llega a dos hojas o menos al final de su turno, cada jugador, incluido
        ése, juega un turno final. Después, la partida termina y los jugadores calculan sus puntuaciones finales."/>, 
        <Rules index = "13" title="Calculo de Puntuaciones" text="Cada recorrido tiene un valor correspondiente a la longitud de este: " src="src/assets/img/puntaje.png"/>, 
        <Rules index = "14" title="Calculo de Puntuaciones" text="Luego el jugador que obtuvo la mayor ruta obtiene 10 puntos extra. El jugador con el mayor puntaje despues de esto es el ganador "/>,
      ]}
    const showRules = () => {
		setdisplayRules((oldValues) => !oldValues);
	};
  return (
    <>
    <div>
        <NavBar />
    </div>

    <div>

      <h1>Reglas</h1>
      <h3>Primero hay que selccionar el color de tu rana los cuales pueden ser los siguientes:</h3>

      <Slider objects={sliderObjectsArray.frogs}/>
      <p></p>
      <button onClick={showRules} >{`${displayRules? "Ocultar":"Ver"} Reglas`}</button>
      {displayRules && <Slider objects={sliderObjectsArray.rules} />}
      <p></p>
    </div>
    </>
  )
        
}

export default Instructions
