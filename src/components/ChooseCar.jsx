import React from "react";
import { userContext } from "../context/UserDataProvider";
import car from "../images/car.png";
import "../styles/chooseCar.css"
import HeaderBack from "./HeaderBack";

const ChooseCar = () => {
  const { nombre, auto, poliza } = React.useContext(userContext);


  console.log(auto)

  return (
    <section className='selectCar'>
  <HeaderBack/>
  <div className='containerSelectcar'>
      <h1 className="text-center mt-4 mb-4"> {nombre} escoge tu vehículo </h1>
      
      {/*  style="max-width: 540px" */}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={car}className="img-fluid rounded-start mt-4 ms-4" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {
                [auto.auto1].map((item, id) => (
                  <h2 key={id}> {item.tipo} {item.marca} {item.patente} </h2>
                ))
              }

{
                [poliza.poliza1].map((item, id) => (
                  <div key={id}>
                  <p className="card-text" > Poliza: {item.codigo} Vigencia: {item.vigencia} </p>
                  <p className="card-text">
                <small className="text-muted">{item.estado}</small>
              </p>
              </div>
                ))
              }
             
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ChooseCar;
