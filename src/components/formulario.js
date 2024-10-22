import React, { useState } from 'react';
import { Box, Button, Form, FormField, Heading, TextInput, TextArea } from 'grommet';
import { FaEnvelope, FaUser, FaComment } from 'react-icons/fa'; // Íconos de contacto

function ContactForm() {
  const [value, setValue] = useState({});

  const onSubmit = ({ value }) => {
    console.log("Formulario enviado: ", value);
    // Aquí puedes integrar la lógica para enviar los datos del formulario a un servicio de correo o backend
  };

  return (
    <Box pad="large" background="background" align="center" justify="center" id='contact'>
      {/* Título de la sección con ícono */}
      <Heading level="2" color="brand" textAlign="center" margin={{ top: "20px", bottom: "medium" }}>
        <FaEnvelope size="48px" style={{ marginRight: '10px' }} /> Contáctame
      </Heading>

      {/* Formulario de contacto */}
      <Form
        value={value}
        onChange={nextValue => setValue(nextValue)}
        onSubmit={onSubmit}
      >
        {/* Campo para el nombre con ícono */}
        <FormField name="name" htmlFor="name-input" label={<><FaUser style={{ marginRight: '10px' }} /> Nombre</>} required>
          <TextInput id="name-input" name="name" placeholder="Tu nombre" />
        </FormField>

        {/* Campo para el correo electrónico con ícono */}
        <FormField name="email" htmlFor="email-input" label={<><FaEnvelope style={{ marginRight: '10px' }} /> Correo electrónico</>} required>
          <TextInput id="email-input" name="email" type="email" placeholder="Tu correo electrónico" />
        </FormField>

        {/* Campo para el mensaje con ícono */}
        <FormField name="message" htmlFor="message-input" label={<><FaComment style={{ marginRight: '10px' }} /> Mensaje</>} required>
          <TextArea id="message-input" name="message" placeholder="Escribe tu mensaje aquí" />
        </FormField>

        {/* Botón para enviar el formulario */}
        <Box direction="row" justify="center" margin={{ top: "medium" }}>
          <Button type="submit" label="Enviar" primary color="accent" />
        </Box>
      </Form>
    </Box>
  );
}

export default ContactForm;
