import React from "react";
import {Link} from "react-router-dom";
import "../styles/sinister.css";
import HeaderBack from "./HeaderBack";
import { userContext } from "../context/UserDataProvider";

import back from '../images/back.png';

const Sinister = () => {

  const {setTypeSinister} =  React.useContext(userContext);

    const saveValue = (e) => {
      const choose = (e.target.value)
      console.log(choose)
      setTypeSinister(choose); 
   }

  return (
    <section className="sinister-container">
      <HeaderBack />
      <div className="back-icon">
     <Link to ={"/selectcar"}>
     <img className= "back" src={back} alt="Home icon" />
     </Link>
     </div>
      <div className="containerHome">
        <div className="orderColumn">
          <div className="sinister-title">    
          <h1 className="title">¿Cuál es la situación?</h1>
          </div>
     
          <div className="sinister-buttons">
    
              <button type="sinister-btn" value="choque" onClick={saveValue} class="btn-h btn btn-dark rounded-pill btn-lg">
                Choque
              </button>
          
        
              <button type="sinister-btn" value="robo" onClick={saveValue} class="btn-h btn btn-dark rounded-pill btn-lg">
                Robo
              </button>
       
         
              <button type="sinister-btn" value="asistencia en ruta" onClick={saveValue} class="btn-h btn btn-dark rounded-pill btn-lg">
                Asistencia en ruta
              </button>
           
          </div>
          <div className="continue-btn">
          <Link to = "/selectdate">
          <button type="button" class="btn btn-dark next-btn">Siguiente</button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sinister;
