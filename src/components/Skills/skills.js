import React from 'react';
import './skills.css';
import UIdesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png"

const Skills = ()=>{
  return(
    <section id = "skills">
      <span className="skillTitle"> What I do</span>
      <span className="skillDesc">I am passionate about creating innovative web solutions and am excited about the opportunity to collaborate on future projects. Feel free to reach out to discuss potential opportunities or if you have any questions about my work. Let's build something amazing together!</span>
      <div className="skillBars">
        <div className="skillBar">
           <img src={UIdesign} alt="" className="skillBarImg" />
           <div className="skillBarText">
                  <h2>UI/UX Design</h2>
                  <p>UI UX designers create the user interface for an app, website, or other interactive media m m mm m m m wamiq jidud dhjshdsj jsdhjshjd</p>
           </div>
        </div>

        <div className="skillBar">
            <img src={WebDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Developer</h2>
                <p>Web development is the work involved in developing </p>
            </div>
          <div/>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                 <h2>App Development</h2>
                 <p>Mobile application development is the process of creating software applications that run on a mobile </p>
            </div>
          </div>
        
      </div>
    </section>
  );
}
export default Skills