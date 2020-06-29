import React from "react";
import {
  FaHtml5,
  FaBootstrap,
  FaSass,
  FaReact,
  FaCodeBranch,
  FaGithub,
} from "react-icons/fa";
import {
  DiCss3,
  DiJavascript1,
  DiFirebase,
  DiVisualstudio,
  DiResponsive,
} from "react-icons/di";
import { AiFillCode } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import "./skill-tootls.style.scss";
import { Link } from "react-scroll";

const SkillsTools = () => {
  return (
    <div className='skills-tools' id='skill'>
      <div className='container'>
        <h1>Skills & Tools</h1>
        <div className='skills'>
          <div className='skill-wraper'>
            <div className='skill'>
              <FaHtml5 className='icon' />
            </div>
            <h3>HTML</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <DiCss3 className='icon' />
            </div>
            <h3>CSS</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <FaBootstrap className='icon' />
            </div>
            <h3>Bootstrap</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <FaSass className='icon' />
            </div>
            <h3>SASS</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <DiJavascript1 className='icon' />
            </div>
            <h3>JavaScript</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <FaReact className='icon' />
            </div>
            <h3>React</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <FaCodeBranch className='icon' />
            </div>
            <h3>Git</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <FaGithub className='icon' />
            </div>
            <h3>Github</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <DiFirebase className='icon' />
            </div>
            <h3>FireBase</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <AiFillCode className='icon' />
            </div>
            <h3>Command Line</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <DiVisualstudio className='icon' />
            </div>
            <h3>VS Code</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <DiResponsive className='icon' />
            </div>
            <h3>Responsive Websites</h3>
          </div>
          <div className='skill-wraper'>
            <div className='skill'>
              <FiFigma className='icon' />
            </div>
            <h3>Figma</h3>
          </div>
        </div>
        <div className='skill-footer'>
          <h2>I'm Currently available for freelance work</h2>
          <p>
            if You have a project that you want to get Started,I Can help you
            with that{" "}
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
  );
};

export default SkillsTools;
