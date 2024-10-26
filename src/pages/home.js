// src/pages/Home.js
import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';

function Home() {
  return (
    <Box
      fill
      align="center"
      justify="center"
      background="background"  // The background color adapts to the theme
      pad="medium"
    >
      <Heading level="1" margin="none" color="brand">
        Hi, I'm Juan Carlos!
      </Heading>
      <Text size="large" margin="small" color="text">
        I am a Computer Systems Engineering student, passionate about software development, with experience in languages such as Java, Python, C#, and more.
      </Text>
      <Text size="medium" margin="small" color="text">
        I am currently looking for a place to do an internship.
      </Text>
      <Button
        primary
        label="Download CV"
        onClick={() => {
          const link = document.createElement('a');
          link.href = "https://juan-7u7.github.io/Portafolio-Laboral/cv_2024.pdf"; // CV URL
          link.download = "cv_2024.pdf"; // Downloaded file name
          document.body.appendChild(link);
          link.click(); // Simulate click to download
          document.body.removeChild(link); // Remove link after download
        }}
        color="accent"  // Button color adapts to the theme
        margin="small"
      />
    </Box>
  );
}

export default Home;
