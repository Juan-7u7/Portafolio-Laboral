// src/components/LottieBackground.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animations/noche.json';
import './LottieBackground.css'; // Asegúrate de importar el archivo CSS

const LottieBackground = () => {
  return (
    <div className="lottie-background" style={{
      position: 'fixed',      // Ocupa toda la pantalla
      top: 0,
      left: 0,
      width: '125%',          // Ocupar todo el ancho
      height: '100%',        // Ocupar toda la altura de la ventana
      overflow: 'hidden',     // Evitar desbordamiento
      zIndex: -1,             // Mantener detrás de otros componentes
    }}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        style={{
          // top: 0,
          // width: '300%',        // Aumentar el ancho para hacer "zoom"
          // height: '100%',       // Aumentar la altura para hacer "zoom"
          // position: 'absolute',  // Posición absoluta para centrar
          // top: '50%',            // Centrar verticalmente
          // left: '50%',           // Centrar horizontalmente
          // transform: 'translate(-50%, -50%)', // Centrar la animación
        }} 
      />
    </div>
  );
};

export default LottieBackground;
