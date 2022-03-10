import React from "react";
import "../styles/newcar.css";
import check from "../images/check-circle.png";
import HeaderBack from "./HeaderBack";
import { Link } from "react-router-dom";
const SendEvent = () => {
  return (
    <section className="newCar ">
      <HeaderBack />
      <div className=" col-auto p-5 text-center ">
        <div className="btn-confirm">
          <img className="logoCheck col-auto " src={check} alt="logo coche" />
          <p>
            ¡Tu solicitud ha sido enviada! Puedes comprobar el proceso de tu
            evento en la sección “Mis eventos”.
          </p>
          <h2>numero de solicitud:{}</h2>
          <div className="btn-send">
            <button type="button" class="btn-h btn btn-dark rounded-pill">
              compartir
            </button>
            <Link to="/events">
              <button type="button" class="btn-h btn btn-dark rounded-pill">
                ir a mis eventos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendEvent;
