import React from "react";
import { ReactComponent as Logo } from "../../assets/feeling_proud.svg";
import "./home.scss";

const Home = () => {
  return (
    <div className='hero' id='home'>
      <Logo className='hero-img' />
      <div className='content'>
        <h1>Hey, I'm Ismail</h1>
        <h2>web developer</h2>
      </div>
    </div>
  );
};

export default Home;
