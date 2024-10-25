import React from 'react';
import { Box, Heading, Text, Anchor, Image } from 'grommet';
import { FaGithub, FaAndroid, FaReact, FaNetworkWired } from 'react-icons/fa'; // Íconos relacionados

function Projects() {
  const projects = [
    {
      title: 'Aplicación Android para Gestión de cuidado de mascotas',
      description: 'Aplicación móvil desarrollada en Android Studio que permite gestionar cartilla digital de mascotas.',
      technologies: ['Android Studio', 'Java', 'SQLite'],
      // github: 'https://github.com/usuario/aplicacion-android',
      images: ['/prt1.jpg', 'prt2.jpg', 'prt3.jpg'], // Lista de imágenes para el carrusel
      icon: <FaAndroid size="48px" /> // Ícono de Android
    },
    {
      title: 'Este Sitio web esta hecho con React',
      description: 'Sitio web creado con React para mostrar un portafolio personal y proyectos destacados.',
      technologies: ['React', 'JavaScript', 'CSS'],
      // github: 'https://github.com/usuario/sitio-web-react',
      // image: '/images/react-website.png', // Imagen de ejemplo
      icon: <FaReact size="48px" /> // Ícono de React
    },
    // {
    //   title: 'Proyecto de Redes con Cisco',
    //   description: 'Configuración de redes y routers utilizando herramientas de Cisco para mejorar la conectividad de una empresa.',
    //   technologies: ['Cisco', 'Redes', 'Routing'],
    //   github: 'https://github.com/usuario/proyecto-redes',
    //   image: '/images/cisco-project.png', // Imagen de ejemplo
    //   icon: <FaNetworkWired size="48px" /> // Ícono de redes (Cisco)
    // },
  ];

  return (
    <Box pad="large" background="background" id='projects'> {/* Utiliza el color de fondo del tema */}
      <Heading level="2" textAlign="center" color="brand">
        <FaGithub size="48px" style={{ marginRight: '10px' }} /> Proyectos Destacados
      </Heading>
      {projects.map((project, index) => (
        <Box
          key={index}
          pad="medium"
          margin={{ bottom: 'medium' }}
          border={{ color: 'accent', size: 'small' }} // Color del borde adaptado al tema
          round="small"
          background="background-contrast" // Fondo que cambia con el tema
        >
          {/* Título del proyecto con ícono */}
          <Heading level="3" margin="none" color="accent">
            {project.icon} {project.title}
          </Heading>
          
          {/* Descripción del proyecto */}
          <Text margin={{ top: 'small', bottom: 'small' }} color="text">
            {project.description}
          </Text>
          
          {/* Tecnologías utilizadas */}
          <Text margin={{ bottom: 'small' }} weight="bold" color="text">
            Tecnologías:
          </Text>
          <Box direction="row" gap="small">
            {project.technologies.map((tech, techIndex) => (
              <Text key={techIndex} color="brand">{tech}</Text>
            ))}
          </Box>

          {/* Enlace al repositorio de GitHub */}
          {project.github && (
            <Anchor
              href={project.github}
              label="Ver en GitHub"
              color="accent"
              target="_blank"
              margin={{ top: 'small' }}
            />
          )}

          {/* Imagen del proyecto */}
          {project.image && (
            <Box margin={{ top: 'small' }} height="small" width="medium">
              <Image fit="cover" src={project.image} alt={`Imagen de ${project.title}`} />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default Projects;
