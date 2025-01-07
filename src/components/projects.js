import React from 'react';
import { Box, Heading, Text, Anchor, Image } from 'grommet';
import { FaGithub, FaAndroid, FaReact, FaNetworkWired } from 'react-icons/fa'; // Related icons

function Projects() {
  const projects = [
    {
      title: 'web platform for job search',
      description: 'A job search platform built for Tehuacán using React, Express, and Next.js.',
      technologies: ['React', 'Material UI', 'PhpMyAdmin'],
      link: 'https://tempop.netlify.app/', // Added the link here
      images: ['/prt1.jpg', 'prt2.jpg', 'prt3.jpg'], // List of images for the carousel
      icon: <FaReact size="48px" /> // Android icon
    },
    {
      title: 'This Website is Built with React',
      description: 'Website created with React to showcase a personal portfolio and featured projects.',
      technologies: ['React', 'JavaScript', 'CSS'],
      // github: 'https://github.com/usuario/react-website',
      // image: '/images/react-website.png', // Example image
      icon: <FaReact size="48px" /> // React icon
    },
    // {
    //   title: 'Networking Project with Cisco',
    //   description: 'Network and router configuration using Cisco tools to improve a company’s connectivity.',
    //   technologies: ['Cisco', 'Networks', 'Routing'],
    //   github: 'https://github.com/usuario/network-project',
    //   image: '/images/cisco-project.png', // Example image
    //   icon: <FaNetworkWired size="48px" /> // Network icon (Cisco)
    // },
  ];

  return (
    <Box pad="large" background="background" id='projects'> {/* Uses theme background color */}
      <Heading level="2" textAlign="center" color="brand">
        <FaGithub size="48px" style={{ marginRight: '10px' }} /> Featured Projects
      </Heading>
      {projects.map((project, index) => (
        <Box
          key={index}
          pad="medium"
          margin={{ bottom: 'medium' }}
          border={{ color: 'accent', size: 'small' }} // Border color adapted to theme
          round="small"
          background="background-contrast" // Background changes with theme
        >
          {/* Project title with icon */}
          <Heading level="3" margin="none" color="accent">
            {project.icon} {project.title}
          </Heading>
          
          {/* Project description */}
          <Text margin={{ top: 'small', bottom: 'small' }} color="text">
            {project.description}
          </Text>
          
          {/* Technologies used */}
          <Text margin={{ bottom: 'small' }} weight="bold" color="text">
            Technologies:
          </Text>
          <Box direction="row" gap="small">
            {project.technologies.map((tech, techIndex) => (
              <Text key={techIndex} color="brand">{tech}</Text>
            ))}
          </Box>

          {/* Link to the project */}
          {project.link && (
            <Anchor
              href={project.link}
              label="Visit Project"
              color="accent"
              target="_blank"
              margin={{ top: 'small' }}
            />
          )}

          {/* Project image */}
          {project.image && (
            <Box margin={{ top: 'small' }} height="small" width="medium">
              <Image fit="cover" src={project.image} alt={`Image of ${project.title}`} />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default Projects;
