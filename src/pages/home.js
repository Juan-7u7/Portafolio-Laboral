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
        Hi, I'm Juan Carlos Hernandez Trujillo!
      </Heading>
      <Text size="large" margin="small" color="text">
      I am a Computer Systems Engineer with a deep passion for software development and a strong desire to contribute to meaningful projects. I have honed my skills in programming languages such as Java, Python, and C#, among others, through both academic and personal experiences. My enthusiasm for technology drives me to continuously expand my knowledge and stay updated with industry trends. I am highly motivated to apply my skills and creativity in a professional setting, and I am eager to secure my first opportunity as a developer to grow and make a positive impact in the field.I am a Computer Systems Engineering student, passionate about software development, with experience in languages such as Java, Python, C#, and more.
      </Text>
      <Text size="medium" margin="small" color="text">
      I am a Computer Systems Engineer with a strong passion for software development and a commitment to contributing to impactful projects. Proficient in languages such as Java, Python, and C#, I continuously strive to expand my knowledge and stay ahead in the ever-evolving tech industry. I am currently available and eager to bring my skills, creativity, and dedication to your service, ready to take on new challenges and make a meaningful contribution to your team.
      </Text>
      <Button
        primary
        label="Download CV"
        onClick={() => {
          const link = document.createElement('a');
          link.href = "https://juan-7u7.github.io/Portafolio-Laboral/cv_2025.pdf"; // CV URL
          link.download = "cv_202477.pdf"; // Downloaded file name
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
