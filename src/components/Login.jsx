import React from "react";
import { LoginContext } from "../context/LoginProvider";
// import { Link } from "react-router-dom";

const Login = () => {
  const {
    email,
    setError,
    password,
    userLogin,
    setPassword,
    setEmail,
  } = React.useContext(LoginContext);

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
    <form className="mt-3" onSubmit={loginCount}>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
          {" "}
        
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label >Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
          {" "}
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          {" "}
        
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
);
};

export default Login;
 //comentario de prueba 