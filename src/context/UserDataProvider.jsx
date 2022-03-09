import React from "react";
import { dataContext } from "./DataProvider";
import { LoginContext } from "./LoginProvider";
export const userContext = React.createContext();

const UserDataProvider = (props) => {

  const { datos } = React.useContext(dataContext);
  const { uidData } = React.useContext(LoginContext);
  
  const [nombre, setName] = React.useState("");
  const [apellidos, setApellidos] = React.useState("");
  const [auto, setAuto] = React.useState([]);
  const [poliza, setPoliza] = React.useState([]);
  const [siniestro, setSiniestro] = React.useState([]);


  // filter para obtener solo datos del usuario (uid)
  
  const user = datos.filter((e) => e.uid === uidData)
  //console.log(user)

 
// map para obtener los datos del objeto 

  React.useEffect(() => {
    user.map((item) => (
            setName(item.nombre),
            setApellidos(item.apellidos),
            setAuto(item.auto), 
            setPoliza(item.poliza),
            setSiniestro(item.siniestro)
     ))
   }, [user])


 /*  React.useEffect(() => {
    user.map((item) => (
         [item.poliza].map((ele) => (
            setPoliza(ele.poliza1)
         ))
     ))
   }, [user]) */

  console.log(auto)
  console.log(poliza)
  console.log(siniestro)
  

  const totalProps = {
    //datos user
    nombre,
    apellidos,
    auto,
    poliza,
  };

  // datos usuarios por uid
  return (
    <userContext.Provider value={totalProps}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserDataProvider;
