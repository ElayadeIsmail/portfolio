import React from "react";
import "./work-item.style.scss";
import { FaGithub } from "react-icons/fa";

const WorkItem = ({ image, title, demoLink, gitHubLink }) => {
  return (
    <div className='item'>
      <div className='item-image'>
        <img src={image} alt='item' />
      </div>
      <div className='item-text'>
        <div className='item-text-wrap'>
          <h2 className='item-text-title'>{title}</h2>
          <div className='item-link'>
            <a href={gitHubLink} rel='noopener noreferrer' target='_blank'>
              See Repo <FaGithub />{" "}
            </a>
            <a href={demoLink} rel='noopener noreferrer' target='_blank'>
              demo Live{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
