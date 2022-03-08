import React from "react";
import { LoginContext } from "../context/LoginProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { email, setError, password, userLogin, setPassword, error, setEmail } =
    React.useContext(LoginContext);

  const loginCount = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      console.log("Datos vacíos email!");
      setError("Datos vacíos email!");
      return;
    }
    if (!password.trim()) {
      console.log("Datos vacíos pass!");
      setError("Datos vacíos pass!");
      return;
    }
    if (password.length < 6) {
      console.log("6 o más carácteres");
      setError("La contraseña debe tener como mínimo 6 caracteres");
      return;
    }
    // console.log("Registro exitoso");
    setError(null);
    userLogin(email, password);
  };

  return (
    <main className="mt-5">
      <div className="mt-5">
        <h3 className="text-center">Iniciar sesión</h3>
        <hr />
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <form onSubmit={loginCount}>
              {error ? <div className="alert alert-danger">{error}</div> : null}
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="btn btn-lg btn-dark btn-block" type="submit">
                Iniciar sesión
              </button>
              <Link to={`/reset`}>
                <p
                  type="button"
                  className="text-center mt-3"
                >
                  Olvidé mi contraseña
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
