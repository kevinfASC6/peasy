import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';   
import Footer from './Footer'

const ContactForm = () => { 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p5krknl', 'template_zw12vs1', form.current, 'F_wfwCR6YnwNoR89f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
      alert("Sent!")
  }; 
  return ( 
    <div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        <Footer />
    </div>
  );
};

export default ContactForm;
