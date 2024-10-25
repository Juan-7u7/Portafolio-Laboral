// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Importa los estilos CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menú</h2>
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#educacion">Educación</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
