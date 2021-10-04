import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          
          <div className="col-md-6">
            <h1 className="title">
              CLICK THROUGH YOUR <br /> NEXT CAREER
            </h1>
            <p className="text-white text-center mt-3">
            Online has arrived with learning programmes and certification at par with global standards which would create a significant impact on a youth’s future career. 
            </p>
            <button className="mt-3 about-btn">Click</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
    );
};

export default Banner;