import React from 'react';
import { Box, Heading, Text } from 'grommet';
import { FaGraduationCap, FaCertificate, FaProjectDiagram } from 'react-icons/fa'; // Import icons

function Experience() {
  return (
    <Box pad="large" background="background" align="center" justify="center" id="education">
      {/* Section title with icon */}
      <Heading level="2" color="brand" textAlign="center" margin={{ top: "20px", bottom: "medium" }}>
        <FaGraduationCap size="48px" style={{ marginRight: '10px' }} /> Experience and Education
      </Heading>

      {/* Education section with icon */}
      <Heading level="3" color="accent" margin={{ top: "20px", bottom: "small" }} textAlign="center">
        <FaGraduationCap style={{ marginRight: '10px' }} /> Education
      </Heading>
      <Box width="medium" margin={{ bottom: 'medium' }}>
        <Text size="medium" color="text" textAlign="center">
          Computer Systems Engineering
        </Text>
        <Text size="small" color="text" textAlign="center">
          Tehuacán Institute of Technology. (2019 - Present)
        </Text>
      </Box>

      {/* Courses and Certifications section with icon */}
      <Heading level="3" color="accent" margin={{ top: "20px", bottom: "small" }} textAlign="center">
        <FaCertificate style={{ marginRight: '10px' }} /> Courses and Certifications
      </Heading>
      <Box width="medium" margin={{ bottom: 'medium' }}>
        <Text size="medium" color="text" textAlign="center">
          Oracle ONE G6 (Frontend Developer)
        </Text>
        <Text size="medium" color="text" textAlign="center">
          Certifications in React
        </Text>
        <Text size="medium" color="text" textAlign="center">
          Certifications in JavaScript
        </Text>
      </Box>

      {/* Relevant Academic Projects section with icon */}
      <Heading level="3" color="accent" margin={{ top: "20px", bottom: "small" }} textAlign="center">
        <FaProjectDiagram style={{ marginRight: '10px' }} /> Relevant Academic Projects
      </Heading>
      <Box width="medium" margin={{ bottom: 'medium' }}>
        <Text size="medium" color="text" textAlign="center">
          Android application development.
        </Text>
        <Text size="medium" color="text" textAlign="center">
          Web application development.
        </Text>
        {/* <Text size="medium" color="text" textAlign="center">
          Network simulation project using Cisco tools.
        </Text> */}
      </Box>
    </Box>
  );
}

export default Experience;
