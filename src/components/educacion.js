import React from 'react';
import { Box, Heading, Text } from 'grommet';
import { FaGraduationCap, FaCertificate, FaProjectDiagram } from 'react-icons/fa'; // Importar íconos

function Experience() {
  return (
    <Box pad="large" background="background" align="center" justify="center" id="educacion">
      {/* Título de la sección con ícono */}
      <Heading level="2" color="brand" textAlign="center" margin={{ top: "20px", bottom: "medium" }}>
        <FaGraduationCap size="48px" style={{ marginRight: '10px' }} /> Experiencia y Educación
      </Heading>

      {/* Sección de Educación con ícono */}
      <Heading level="3" color="accent" margin={{ top: "20px", bottom: "small" }} textAlign="center">
        <FaGraduationCap style={{ marginRight: '10px' }} /> Educación
      </Heading>
      <Box width="medium" margin={{ bottom: 'medium' }}>
        <Text size="medium" color="text" textAlign="center">
          Ingeniería en Sistemas Computacionales
        </Text>
        <Text size="small" color="text" textAlign="center">
        Instituto Tecnológico de Tehuacán. (2019 - Actualidad)
        </Text>
      </Box>

      {/* Sección de Cursos y Certificaciones con ícono */}
      <Heading level="3" color="accent" margin={{ top: "20px", bottom: "small" }} textAlign="center">
        <FaCertificate style={{ marginRight: '10px' }} /> Cursos y Certificaciones
      </Heading>
      <Box width="medium" margin={{ bottom: 'medium' }}>
        <Text size="medium" color="text" textAlign="center">
          Oracle ONE G6 (Frontend Developer)
        </Text>
        <Text size="medium" color="text" textAlign="center">
          Certificaciones con React
        </Text>
        <Text size="medium" color="text" textAlign="center">
          Certificaciones con JavaScript
        </Text>
      </Box>

      {/* Sección de Proyectos Académicos con ícono */}
      <Heading level="3" color="accent" margin={{ top: "20px", bottom: "small" }} textAlign="center">
        <FaProjectDiagram style={{ marginRight: '10px' }} /> Proyectos Académicos Relevantes
      </Heading>
      <Box width="medium" margin={{ bottom: 'medium' }}>
        <Text size="medium" color="text" textAlign="center">
          Desarrollo de aplicaciones Android.
        </Text>
        <Text size="medium" color="text" textAlign="center">
          Desarrollo de aplicaciones Web.
        </Text>
        {/* <Text size="medium" color="text" textAlign="center">
          Proyecto de simulación de redes utilizando herramientas Cisco.
        </Text> */}
      </Box>
    </Box>
  );
}

export default Experience;
