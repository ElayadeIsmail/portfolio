import React from "react";
import { FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import "./contact.style.scss";

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='container'>
        <h1>Contact</h1>
        <div className='wrapper'>
          <div className='social-media'>
            <h2>Social Media</h2>
            <ul>
              <li>
                <a
                  href='https://twitter.com/ElayadeIsmail'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/ElayadeIsmail'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/ELayadeIsmail'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
          <div className='contact-form'>
            <form method='POST' data-netlify='true'>
              <p className='form-group'>
                <label>Name</label>
                <input type='text' name='name' />
              </p>

              <p className='form-group'>
                <label>Email Address</label>
                <input type='email' name='email' />
              </p>
              <p className='form-group'>
                <label>Message</label>
                <textarea name='message' rows='5'></textarea>
              </p>
              <p>
                <button type='submit'>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
