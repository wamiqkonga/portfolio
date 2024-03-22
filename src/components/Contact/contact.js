import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs
      .sendForm('service_ldsgpwo', 'template_bfokivr', form.current,'DuHe1NB46f5YUj9s0')
      .then(
        (result) => {
          console.log("Success!!",result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        },
      );
       
  };
  return (
    <section id ="contactPage" >
        <h1 className='contactPageTitle'>
          Contact Me
        </h1>
        <span className='contactDesc'>Please fill out the form below for to discuss any work oppurtunities</span>

        <form className='contactForm' ref ={form} onSubmit={sendEmail} >
          <input type="text" className='name' placeholder='Your Name' name='your_name'/>
          <input type="email" className='email' placeholder='Your Email' name='your_email'/>
          <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='send' className='submitBtn'>
            Submit
          </button>
          <div className='links'>
            <a href="https://www.facebook.com" target="_blank">
            <img src={FacebookIcon} alt="" className="link" />
            </a>
            <a href="https://www.youtube.com"  target="_blank">
            <img src={YoutubeIcon} alt="" className="link" />
            </a>
            <a href="https://www.instagram.com/wkongwani" target="_blank">
            <img src={InstagramIcon} alt="" className="link" />
            </a>
            <a href="https://www.twitter.com/wkongwani"  target="_blank">
            <img src={TwitterIcon} alt="" className="link"  />
            </a>
          </div>
         </form>
    </section>
  );
}

export default Contact;
