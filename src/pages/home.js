// src/pages/Home.js
import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';

function Home() {
  return (
    <Box
      fill
      align="center"
      justify="center"
      background="background"  // El color de fondo se adapta al tema
      pad="medium"
    >
      <Heading level="1" margin="none" color="brand">
        ¡Hola, soy Juan Carlos!
      </Heading>
      <Text size="large" margin="small" color="text">
        Soy estudiante de Ingeniería en Sistemas Computacionales, apasionado por el desarrollo de software y con experiencia en lenguajes como Java, Python, C#, entre otros.
      </Text>
      <Text size="medium" margin="small" color="text">
        Actualmente busco un lugar para realizar prácticas profesionales.
      </Text>
      <Button
        primary
        label="Descargar CV"
        href="/cv_2024.pdf"
        target="_blank" // Abre el PDF en una nueva pestaña
        rel="noopener noreferrer" // Seguridad para enlaces externos
        color="accent"  // El color del botón se adapta al tema
        margin="small"
      />
    </Box>
  );
}

export default Home;
