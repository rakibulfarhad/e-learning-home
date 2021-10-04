import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import PopularCourse from '../PupolarCourse/PopularCourse';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularCourse/>
            
        </div>
    );
};

export default Home;