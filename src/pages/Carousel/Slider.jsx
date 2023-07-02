import React, {useState, useEffect} from 'react';
import './Slider.css';

function Slider({ objects}) {
	// Variables y Estados
	const [indexActual, setindexActual] = useState(0);
	const cantidad = objects?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(objects) || cantidad === 0) return;

	const siguienteIndex = () => {
		setindexActual(indexActual === cantidad - 1 ? 0 : indexActual + 1);
	};

	const anteriorIndex = () => {
		setindexActual(indexActual === 0 ? cantidad - 1 : indexActual - 1);
	};


	return (
		<div className="carousel-container">
			<button onClick={anteriorIndex}>←</button>
			{objects[indexActual]}
			<button onClick={siguienteIndex}>→</button>
		</div>
	);
}

export default Slider;


