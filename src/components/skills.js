import React from 'react';
import { Box, Heading, Text } from 'grommet';
import { DiJava, DiJavascript1, DiPython, DiReact, DiAndroid, DiDatabase } from 'react-icons/di'; // Importar íconos desde react-icons
import { SiR, SiCsharp, SiVuedotjs, SiCodeigniter, SiPython } from 'react-icons/si'; // Otros íconos adicionales
import { FaTools, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa'; // Íconos adicionales para secciones

function Skills() {
  return (
    <Box
      id='skills'
      fill           // Hace que el contenedor ocupe toda la pantalla
      align="center" // Centra todo el contenido horizontalmente
      justify="center" // Centra todo el contenido verticalmente
      background="background" // Usa el color de fondo del tema
      pad="large" // Espaciado interno (padding)
    >
      {/* Título principal de la sección con ícono */}
      <Heading level="2" textAlign="center" margin="none" color="brand">
        <FaLaptopCode size="48px" style={{ marginRight: '10px' }} /> Habilidades Técnicas
      </Heading>

      {/* Sección de Lenguajes de Programación */}
      <Heading level="3" color="accent" margin={{ top: "20px", bottom: "medium" }} textAlign="center">
        <FaTools style={{ marginRight: '10px' }} /> Lenguajes de Programación
      </Heading>
      {/* Fila para mostrar los lenguajes en horizontal */}
      <Box direction="row" gap="medium" wrap justify="center">
        {/* Cada caja contiene un ícono y el nombre del lenguaje */}
        <Box align="center">
          <DiJava size="48px" />
          <Text color="text">Java</Text>
        </Box>
        <Box align="center">
          <DiJavascript1 size="48px" />
          <Text color="text">JavaScript</Text>
        </Box>
        <Box align="center">
          <DiPython size="48px" />
          <Text color="text">Python</Text>
        </Box>
        <Box align="center">
          <DiDatabase size="48px" />
          <Text color="text">SQL</Text>
        </Box>
        <Box align="center">
          <SiR size="48px" />
          <Text color="text">R</Text>
        </Box>
        <Box align="center">
          <SiCsharp size="48px" />
          <Text color="text">C#</Text>
        </Box>
      </Box>

      {/* Sección de Herramientas y Frameworks */}
      <Heading level="3" color="accent" margin={{ top: "100px", bottom: "medium" }} textAlign="center">
        <FaProjectDiagram style={{ marginRight: '10px' }} /> Herramientas y Frameworks
      </Heading>
      {/* Fila para mostrar las herramientas en horizontal */}
      <Box direction="row" gap="medium" wrap justify="center">
        <Box align="center">
          <DiReact size="48px" />
          <Text color="text">React</Text>
        </Box>
        <Box align="center">
          <DiAndroid size="48px" />
          <Text color="text">Android Studio</Text>
        </Box>
        <Box align="center">
          <SiPython size="48px" />
          <Text color="text">Reflex Python</Text>
        </Box>
        <Box align="center">
          <SiVuedotjs size="48px" />
          <Text color="text">Vue.js</Text>
        </Box>
        <Box align="center">
          <SiCodeigniter size="48px" />
          <Text color="text">CodeIgniter</Text>
        </Box>
      </Box>

      {/* Sección de Áreas de Especialización */}
      <Heading level="3" color="accent" margin={{ top: "100px", bottom: "medium" }} textAlign="center">
        <FaTools style={{ marginRight: '10px' }} /> Áreas de Especialización
      </Heading>
      <Text size="large" textAlign="center" color="text">
        Desarrollo Android, Desarrollo Web, Redes Cisco
      </Text>
    </Box>
  );
}

export default Skills;
