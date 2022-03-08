import React from "react";
import { LoginContext } from "../context/LoginProvider";

const ResetPassword = () => {
  const [email, setEmail] = React.useState("");

  const { resetPassword, error, setError } = React.useContext(LoginContext);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      console.log("Datos vacíos email!");
      setError("Datos vacíos email!");
      return;
    }
    setError(null);

    resetPassword(email);
  };

  return (
    <div className="mt-5">
      <h3 className="text-center">Recuperar contraseña</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            {error ? <div className="alert alert-danger">{error}</div> : null}
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Ingrese Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button className="btn btn-lg btn-dark btn-block" type="submit">
              Recuperar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
