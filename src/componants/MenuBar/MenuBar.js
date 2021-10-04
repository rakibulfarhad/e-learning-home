import React from 'react';
import { NavLink, NavNavLink } from 'react-router-dom';
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
                <NavLink to="/home" activeStyle={{
                  fontWeight: "bold",
                  color: "green"
                }} className="items">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/popular" activeStyle={{
                  fontWeight: "bold",
                  color: "green"
                }} className="items">
                  <li>Popular Course</li>
                </NavLink>
                <NavLink to="/professional" activeStyle={{
                  fontWeight: "bold",
                  color: "green"
                }} className="items">
                  <li>Professional Course</li>
                </NavLink>
                <NavLink to="about" activeStyle={{
                  fontWeight: "bold",
                  color: "green"
                }} className="items">
                  <li>About us</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManuBar;