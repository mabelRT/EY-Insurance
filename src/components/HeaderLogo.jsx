import React from 'react';
import close_session from '../images/close_session.png';
import '../styles/header.css';
import grey_logo from '../images/grey_logo.png'
import { LoginContext } from '../context/LoginProvider';

const HeaderLogo = () => {
    const { signOff } =React.useContext(LoginContext);

    return ( 
<section className="header-container">
<div className="closure-box">
    <img className= "close_session" src={close_session} alt="Close session icon"  onClick={()=> signOff()} />
    </div>
    <div className="logo-box">
    <img className= "logo-header" src={grey_logo} alt="EY logo" />
    </div>
</section>

     );
}
 
export default HeaderLogo;