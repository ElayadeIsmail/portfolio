import React from "react";
import WorkItem from "../work-item/WorkItem";
import imageCommerce from "../../image/e-commerce.jpg";
import imageMovie from "../../image/movieLand.jpg";
import imageUsers from "../../image/users.jpg";
import imageMeals from "../../image/meals.jpg";
import "./work.style.scss";

const Work = () => {
  return (
    <div className='work' id='work'>
      <h1>Work</h1>
      <div className='items'>
        <WorkItem
          image={imageCommerce}
          title='E-Commerce WebSite'
          gitHubLink='https://github.com/ElayadeIsmail/diamond-clothing'
          demoLink='https://diamond-clothing-6e591.firebaseapp.com/'
        />
        <WorkItem
          image={imageMovie}
          title='MovieLand WebSite'
          gitHubLink='https://github.com/ElayadeIsmail/Movie-Land'
          demoLink='https://movie-land.netlify.app/'
        />
        <WorkItem
          image={imageUsers}
          title='Users Profiles WebSite'
          gitHubLink='https://github.com/ElayadeIsmail/Users-profiles'
          demoLink='https://react-e0391.web.app/login?redirect=%2F'
        />
        <WorkItem
          gitHubLink='https://github.com/ElayadeIsmail/fetch-meals'
          image={imageMeals}
          title='Fetching Meals WebSite'
          demoLink='https://fetch-meals.netlify.app/'
        />
      </div>
    </div>
  );
};

export default Work;
