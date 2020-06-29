import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./header.scss";

const Header = () => {
  return (
    <div className='header'>
      <h1 onClick={() => scroll.scrollToTop()} className='logo'>
        E.
      </h1>
      <ul className='navbar'>
        <li className='nav-item'>
          <Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
            <div className='line'></div>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
            <div className='line'></div>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            activeClass='active'
            to='skill'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Skills & Tools
            <div className='line'></div>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            activeClass='active'
            to='work'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Work
            <div className='line'></div>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
            <div className='line'></div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
