import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./PopularCourse.css";

const PopularCourse = () => {

  const [popularCourse, setPopulaeCourse] = useState([]);

  useEffect(() => {
    fetch('./course.json')
      .then(res => res.json())
      .then(data => setPopulaeCourse(data))
  }, [])

  return (
    <div className="container my-5">
      <div>
        <h1 className="m-5">Pupolar Course</h1>
      </div>
      <div>
        <div className="row">
          {popularCourse?.map((pd) => (
            <div className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-100" src={pd.img} alt="" />
                </div>
                <div className="text-area">
                  <h3>Name: {pd.name}</h3>
                  <h5>Price: {pd.price}</h5>
                  <Link to="/details">
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