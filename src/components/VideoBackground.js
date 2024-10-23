// src/components/VideoBackground.js
import React from 'react';
import backgroundVideo from '../assets/fondo_web.mp4'; // Asegúrate de que la ruta sea correcta

const VideoBackground = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: -1,
    }}>
      <video 
        autoPlay 
        loop 
        muted 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Esto asegura que el video cubra todo el área
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>
  );
};

export default VideoBackground;
