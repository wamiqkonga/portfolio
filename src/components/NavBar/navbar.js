import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/w-logo.jpeg';
import { Link } from 'react-scroll'
import contacting from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import Intro from '../intro/intro';

const Navbar = () => {
  const [showMenu ,setShowMenu] = useState(false)
  return(
    <nav className='navbar'>
      <a href="/"> {Intro}
      <img src={logo} alt="Logo" className='logo'
      />
      </a>
      <div className='desktopMenu'>

        <Link activeClass="active" to='intro' spy={true}  className ="desktopMenuListItem" >Home</Link>

        <Link activeClass="active" to='skills' spy={true}  className ="desktopMenuListItem" >Skills</Link>

        <Link activeClass="active" to='Works' spy={true}  offset ={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>

        <Link activeClass="active" to = 'reviews' spy = {true}   className ="desktopMenuListItem" >Testimonials</Link>
        
      </div>

      <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(true)} />

      <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500}className ="listItem" onClick={()=>setShowMenu(false)} >Home</Link>

        <Link activeClass="active" to='skills' spy={true}smooth = {true} offset ={-100} duration = {500} className ="listItem"onClick={()=>setShowMenu(false)} >Skills</Link>

        <Link activeClass="active" to='Works' spy={true} smooth={true} offset ={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>

        <Link activeClass = "active" to = 'reviews' spy = {true} smooth = {true} offset ={-100} duration = {500} className ="listItem" onClick={()=>setShowMenu(false)}>Testimonials</Link>

        <Link activeClass = "active" to = 'contactPage' spy = {true} smooth = {true} offset ={-100} duration = {500} className ="listItem" onClick={()=>setShowMenu(false)} >Contacts</Link>
        
      </div>
      <button className='desktopMenubtn'  onClick ={() =>
      {
      document.getElementById('contactPage').scrollIntoView({behaviour: 'smooth'});
      }}>
        <img src={contacting} alt="" className='desktopMenuImg' /> Contact Me </button>
    </nav>  );

}
export default Navbar;