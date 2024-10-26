import React from 'react';
import { Box, Heading, Text } from 'grommet';
import { DiJava, DiJavascript1, DiPython, DiReact, DiAndroid, DiDatabase } from 'react-icons/di'; // Import icons from react-icons
import { SiR, SiCsharp, SiVuedotjs, SiCodeigniter, SiPython } from 'react-icons/si'; // Additional icons
import { FaTools, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa'; // Additional icons for sections

function Skills() {
  return (
    <Box
      id='skills'
      fill           // Makes the container take the full screen
      align="center" // Centers all content horizontally
      justify="center" // Centers all content vertically
      background="background" // Uses theme background color
      pad="large" // Padding
    >
      {/* Main section title with icon */}
      <Heading level="2" textAlign="center" margin="none" color="brand">
        <FaLaptopCode size="48px" style={{ marginRight: '10px' }} /> Technical Skills
      </Heading>

      {/* Programming Languages Section */}
      <Heading level="3" color="accent" margin={{ top: "20px", bottom: "medium" }} textAlign="center">
        <FaTools style={{ marginRight: '10px' }} /> Programming Languages
      </Heading>
      {/* Row to display languages horizontally */}
      <Box direction="row" gap="medium" wrap justify="center">
        {/* Each box contains an icon and the language name */}
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

      {/* Tools and Frameworks Section */}
      <Heading level="3" color="accent" margin={{ top: "100px", bottom: "medium" }} textAlign="center">
        <FaProjectDiagram style={{ marginRight: '10px' }} /> Tools and Frameworks
      </Heading>
      {/* Row to display tools horizontally */}
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

      {/* Areas of Expertise Section */}
      <Heading level="3" color="accent" margin={{ top: "100px", bottom: "medium" }} textAlign="center">
        <FaTools style={{ marginRight: '10px' }} /> Areas of Expertise
      </Heading>
      <Text size="large" textAlign="center" color="text">
        Android Development, Web Development, Cisco Networking
      </Text>
    </Box>
  );
}

export default Skills;
