import React from 'react';
import close_session from '../images/close_session.png';
import '../styles/header.css';
import home from '../images/home.png'

const HeaderHome = () => {
    return ( 
<section className="header-container">
    <div className="closure-box">
    <img className= "close_session" src={close_session} alt="Close session icon" />
    </div>
    <div className="home-box">
    <img className= "home" src={home} alt="Home icon" />
    </div>
</section>

     );
}
 
export default HeaderHome;