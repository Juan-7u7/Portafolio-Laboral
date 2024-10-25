import React, { useState } from 'react';
import { Box, Button, Form, FormField, Heading, TextInput, TextArea } from 'grommet';
import { FaEnvelope, FaUser, FaComment } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [value, setValue] = useState({});
  const [isSent, setIsSent] = useState(false); // Estado para manejar el mensaje de éxito

  const onSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_pktwkf9', 'template_4iyqvzr', event.target, 'rXMUzH3MSIzP6ocZ6')
      .then((result) => {
        console.log("Formulario enviado: ", result.text);
        setIsSent(true); // Muestra el mensaje de éxito al enviar
      })
      .catch((error) => {
        console.error("Error al enviar el formulario: ", error.text);
      });
  };

  return (
    <Box pad="large" background="background" align="center" justify="center" id='contact'>
      <Heading level="2" color="brand" textAlign="center" margin={{ top: "20px", bottom: "medium" }}>
        <FaEnvelope size="48px" style={{ marginRight: '10px' }} /> Contáctame
      </Heading>

      <Form onSubmit={onSubmit}>
        <FormField name="name" htmlFor="name-input" label={<><FaUser style={{ marginRight: '10px' }} /> Nombre</>} required>
          <TextInput id="name-input" name="name" placeholder="Tu nombre" />
        </FormField>

        <FormField name="email" htmlFor="email-input" label={<><FaEnvelope style={{ marginRight: '10px' }} /> Correo electrónico</>} required>
          <TextInput id="email-input" name="email" type="email" placeholder="Tu correo electrónico" />
        </FormField>

        <FormField name="message" htmlFor="message-input" label={<><FaComment style={{ marginRight: '10px' }} /> Mensaje</>} required>
          <TextArea id="message-input" name="message" placeholder="Escribe tu mensaje aquí" />
        </FormField>

        <Box direction="row" justify="center" margin={{ top: "medium" }}>
          <Button type="submit" label="Enviar" primary color="accent" />
        </Box>
      </Form>

      {isSent && <Box margin={{ top: "medium" }}><p>¡Mensaje enviado con éxito!</p></Box>}
    </Box>
  );
}

export default ContactForm;
