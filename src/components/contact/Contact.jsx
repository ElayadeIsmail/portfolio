import React, { useState } from "react";
import { FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import "./contact.style.scss";
// import { messageRef } from "../../firebase.js";

const Contact = () => {
  const [formInfo, setFormInfo] = useState({
    Name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormInfo({ ...formInfo, [name]: value });
  };

  const { Name, email, message } = formInfo;
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const newMessageRef = messageRef.push();
  //   newMessageRef.set({
  //     Name,
  //     email,
  //     message,
  //   });
  // };

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
            <form
              method='POST'
              action='https://formspree.io/elayadeismail@gmail.com'
            >
              <div className='hpot'>
                <label>
                  Leave this field empty: <input name='_gotcha' />
                </label>
              </div>
              <p>
                <label>Name</label>
                <input
                  type='text'
                  name='Name'
                  value={Name}
                  onChange={onChange}
                />
              </p>

              <p>
                <label>Email Address</label>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                />
              </p>
              <p>
                <label>Message</label>
                <textarea
                  name='message'
                  rows='5'
                  value={message}
                  onChange={onChange}
                ></textarea>
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
