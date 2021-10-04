import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./PopularCourse.css";

const PopularCourse = () => {

    const [popularCourse, setPopulaeCourse] = useState([]);

    useEffect( () => {
        fetch('./course.json')
        .then(res => res.json())
        .then(data => setPopulaeCourse(data))
    },[])

    return (
        <div className="container">
            <div className="all-team">
        <h1>Our Teams</h1>
      </div>
            <div className="teams">
        <div className="row">
          {popularCourse?.map((pd) => (
            <div className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-50" src={pd.img} alt="" />
                </div>
                <div className="text-area">
                  <p>Name: {pd.name}</p>
                  <p>Price: {pd.price}</p>
                  <Link to={`/details/${pd.idTeam}`}>
                    <button className="btn btn-success">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default PopularCourse;