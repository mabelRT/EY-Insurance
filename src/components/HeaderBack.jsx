import React from 'react';
import close_session from '../images/close_session.png';
import '../styles/header.css';
import back from '../images/back.png'

const HeaderBack = () => {
    return ( 
<section className="header-container">
    <div className="closure-box">
    <img className= "close_session" src={close_session} alt="Close session icon" />
    </div>
    <div className="back-box">
    <img className= "back" src={back} alt="Home icon" />
    </div>
</section>

     );
}
 
export default HeaderBack;