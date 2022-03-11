import React from 'react';
import { Link } from 'react-router-dom';
import home from '../images/home.png';
import '../styles/header.css';
import back from '../images/back.png'


const HeaderBack = () => {

    return ( 
<section className="header-container">
<div className="homeBack-box">
    <Link to={"/home"}>
    <img className= "home-back" src={home} alt="Home icon" />
    </Link>
    </div>
    <div className="back-box">
    <img className= "back" src={back} alt="Home icon" />
    </div>
</section>

     );
}
 
export default HeaderBack;