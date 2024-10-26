import React, { useState } from 'react';
import { Box, Button, Form, FormField, Heading, TextInput, TextArea } from 'grommet';
import { FaEnvelope, FaUser, FaComment } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [value, setValue] = useState({});
  const [isSent, setIsSent] = useState(false); // State to handle success message

  const onSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_pktwkf9', 'template_4iyqvzr', event.target, 'rXMUzH3MSIzP6ocZ6')
      .then((result) => {
        console.log("Form sent: ", result.text);
        setIsSent(true); // Show success message on submit
      })
      .catch((error) => {
        console.error("Error sending form: ", error.text);
      });
  };

  return (
    <Box pad="large" background="background" align="center" justify="center" id='contact'>
      <Heading level="2" color="brand" textAlign="center" margin={{ top: "20px", bottom: "medium" }}>
        <FaEnvelope size="48px" style={{ marginRight: '10px' }} /> Contact Me
      </Heading>

      <Form onSubmit={onSubmit}>
        <FormField name="name" htmlFor="name-input" label={<><FaUser style={{ marginRight: '10px' }} /> Name</>} required>
          <TextInput id="name-input" name="name" placeholder="Your name" />
        </FormField>

        <FormField name="email" htmlFor="email-input" label={<><FaEnvelope style={{ marginRight: '10px' }} /> Email</>} required>
          <TextInput id="email-input" name="email" type="email" placeholder="Your email" />
        </FormField>

        <FormField name="message" htmlFor="message-input" label={<><FaComment style={{ marginRight: '10px' }} /> Message</>} required>
          <TextArea id="message-input" name="message" placeholder="Write your message here" />
        </FormField>

        <Box direction="row" justify="center" margin={{ top: "medium" }}>
          <Button type="submit" label={isSent ? "Sent" : "Send"} primary color="accent" disabled={isSent} />
        </Box>
      </Form>

      {isSent && <Box margin={{ top: "medium" }}><p>Message sent successfully!</p></Box>}
    </Box>
  );
}

export default ContactForm;
