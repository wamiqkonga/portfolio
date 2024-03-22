import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png';
import btnImgMob from '../../assets/hire arrow.svg'


const Intro = () => {
    const redirectToLinkedIn = () => {
      // Replace this URL with the actual LinkedIn profile URL
      const linkedInUrl = 'https://www.linkedin.com/in/wamiq-kongwani-11000a280/';
  
      window.open(linkedInUrl, '_blank');
    };
  
  return (
    <section id = "intro">
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Wamiq</span><br />Web Developer.</span>
        <p className='introPara'>I'm a skilled web developer with experience in creating robust web applications.</p>
        <>
        <Link> <button  className="btn" onClick={redirectToLinkedIn}>
          <img className='btnImg' src={btnImg}  alt="Hire Me" /> 
          Hire Me</button>
         </Link>

         <Link> <button  className="btnMob" onClick={redirectToLinkedIn}>
         <span class="button-text">Hire Me</span>
          <span className='btnImgMob'><img src={btnImgMob} /> </span>
          </button>
         </Link>
         
         </>

      </div>
      <img src={bg} alt="Profile" className='bg'/>


    </section>
  );
}
export default Intro;
