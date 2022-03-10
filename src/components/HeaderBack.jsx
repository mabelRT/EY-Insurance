import React from 'react';
import close_session from '../images/close_session.png';
import '../styles/header.css';
import back from '../images/back.png'
import { LoginContext } from '../context/LoginProvider';



const HeaderBack = () => {
    const { signOff } =React.useContext(LoginContext);
  

    return ( 
<section className="header-container">
<div className="closure-box">
   
    <img className= "close_session" src={close_session} alt="Close session icon"  onClick={()=> signOff()} />
    
    </div>
    <div className="back-box">
    <img className= "back" src={back} alt="Home icon" />
    </div>
</section>

     );
}
 
export default HeaderBack;