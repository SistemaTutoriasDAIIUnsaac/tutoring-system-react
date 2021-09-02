import React from "react";
import { Link } from "react-router-dom";

function Login() {


  return (
    <div
      class="center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="login-box" style={{width: 400}}>
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            {/* <a href="!#" className="h1"> */}
            <h1>
              <img src="/unsaacw.png" style={{width: 130}} alt="" /> <br/>
              <b>Sistema de Tutorias <br/> UNSAAC  </b>
            </h1>
            {/* </a> */}
          </div>
          <div className="card-body">
            <p className="login-box-msg">Inicio de Sesion</p>
            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember" style={{marginLeft: 5}}>Recordar esta cuenta</label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Ingresar
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>            
            {/* /.social-auth-links */}            
            <p className="mb-1">
              <a href="forgot-password.html">He olvidado mi contraseña</a>
            </p>
            
            <p className="mb-0">
              <Link to="/Registro" className="text-center">
                Cambiar contraseña
              </Link> <br/>
              NOTA: Si es la primera vez que ingresas
              por seguridad debes cambiar tu contraseña. <br/>
            </p>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
}

export default Login;
