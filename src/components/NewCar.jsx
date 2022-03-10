import React from "react";
import "../styles/newcar.css";
import coche from "../images/coche.png";
import HeaderBack from "./HeaderBack";

const NewCar = () => {
  return (
    <section className="newCar">
      <HeaderBack />
      <div className="col-auto p-5 text-center containerLogo-C">
        <div className="contaC">
          <h1>¿Deseas un automóvil de reemplazo?</h1>
          <img className="logoCoche" src={coche} alt="logo coche" />
          <div className="btn-carr">
          <button type="button" class="btn-N btn btn-dark rounded-pill ">
            si
          </button>
          <button type="button" class="btn-NE btn btn-dark rounded-pill ">
            no
          </button>
          </div>
          <div className="checkLabel">
            <input
              type="checkbox"
              className="formCheck form-check-input"
              id="exampleCheck1"
            ></input>

            <label className="form-check-label" for="exampleCheck1">
              <p>
                acepto
                <button type="button" class="btn btn-link">
                  terminos y condiciones
                </button>
              </p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCar;
