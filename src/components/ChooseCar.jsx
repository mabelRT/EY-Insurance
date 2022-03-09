import React from "react";
import NavSinister from "./NavSinister";
import { userContext } from "../context/UserDataProvider";

const ChooseCar = () => {

  const { nombre, apellidos, auto } = React.useContext(userContext);


  //console.log(datos)

  return (
    <div>
      <NavSinister />

      <h1 className="text-center"> Escoge tu vehículo </h1>
      {nombre} {apellidos}

      
    </div>
  );
};

export default ChooseCar;
