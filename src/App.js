import React from 'react';
import { Grommet, Box } from 'grommet';
import Home from './pages/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Educacion from './components/educacion';
import Form from './components/formulario';
import LottieBackground from './components/LottieBackground';
import Sidebar from './components/Sidebar';

// Definir el tema
const theme = {
  global: {
    colors: {
      background: 'transparent',  // Fondo transparente
      brand: '#11999E',           // Color para encabezados
      accent: '#6DECB9',          // Color para botones o acentos
      text: '#FFFFFF',            // Color de texto oscuro
    },
    font: {
      family: 'Arial',
      size: '18px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full pad="none" margin="none" >
      {/* <Sidebar /> */}
      <LottieBackground /> {/* Componente de fondo animado */}
      <Box align="center" pad="medium" style={{ position: 'relative', zIndex: 1 }}>
        <Home /> {/* Página de inicio */}
      </Box>
      <Skills /> {/* Página de habilidades */}
      <Projects /> 
      
      <Educacion /> {/* Página de educación */}
      <Form /> {/* Página de formulario */}
    </Grommet>
  );
}

export default App;
