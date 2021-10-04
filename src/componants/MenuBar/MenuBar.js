import React from 'react';
import { Link } from 'react-router-dom';
import "./MenuBar.css";

const ManuBar = () => {
    return (
        <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="">
              
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/popular" className="items">
                  <li>Popular Course</li>
                </Link>
                <Link to="/professional" className="items">
                  <li>Professional Course</li>
                </Link>
                <Link to="about" className="items">
                  <li>About us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ManuBar;