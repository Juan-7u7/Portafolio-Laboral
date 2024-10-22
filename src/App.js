import React, { useState } from 'react';
import { Grommet, Box, Button } from 'grommet';
import Home from './pages/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Educacion from './components/educacion';
import Form from './components/formulario';
// import Background from './components/background';

// Definir el tema claro
const lightTheme = {
  global: {
    colors: {
      background: '#F4F4F4',  // Fondo claro
      brand: '#11999E',        // Color para encabezados
      accent: '#6DECB9',       // Color para botones o acentos
      text: '#3C3C3C',         // Color de texto oscuro
    },
    font: {
      family: 'Arial',
      size: '18px',
    },
  },
};

// Definir el tema oscuro
const darkTheme = {
  global: {
    colors: {
      background: '#333333',   // Fondo oscuro
      brand: '#6DECB9',        // Color para encabezados en modo oscuro
      accent: '#11999E',       // Color para botones o acentos
      text: '#FFFFFF',         // Color de texto claro
    },
    font: {
      family: 'Arial',
      size: '18px',
    },
  },
};

function App() {
  // Usar el estado para controlar el tema actual (claro u oscuro)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar entre claro y oscuro
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Cambia el estado de modo oscuro
  };

  return (
    <Grommet theme={isDarkMode ? darkTheme : lightTheme} full>
      {/* <Background /> */}
      <Home /> {/* Página de inicio */}
      <Box align="center" pad="medium">
        <Button
          label={isDarkMode ? 'Modo Claro' : 'Modo Oscuro'} // El botón cambia el texto según el tema
          onClick={toggleTheme} // Ejecuta la función de cambio de tema
          margin="small"
        />
      </Box>
      <Skills /> {/* Página de habilidades */}
      <Projects /> {/* Página de proyectos */}
      <Educacion /> {/* Página de educación */}
      <Form /> {/* Página de formulario */} 
    </Grommet>
  );
}

export default App;
