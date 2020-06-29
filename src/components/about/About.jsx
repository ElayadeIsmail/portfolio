import React from "react";
import "./about.style.scss";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <h1 className='about-header'>About</h1>
        <h2 className='about-sub-header'>Who Is Ismail ?</h2>
        <div className='about-content'>
          <img src={require("../../image/me.jpg")} alt='me' />
          <div className='about-content-content'>
            <h1>Hey,</h1>
            <p>
              I'm A web developer based in Rabat Morocco,
              <br />
              I have a Bachelor degree in physical science at the Faculty of
              Sciences in Rabat.
              <br />
              and there i got introduced to programming languages and right
              there i've got a passion for it, and after I got my degree i knew
              what i wanted so i entered the word of web development to{" "}
              <span className='li'>Create What You Need.</span>
              <br />
              <Link
                className='link'
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Get In Touch !
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
