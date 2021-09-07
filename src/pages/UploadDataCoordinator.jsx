import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UploadDataCoordinator = () => {
  const dataTeacher = {
    cod_teacher: "102030",
    name: "Pedrito",
    f_lastname: "Zolano",
    m_lastname: "Siempre",
  };
  const onSubmit = (e) => {
    e.preventDefault();
    postData();
  };
  const url = "https://tutoring-system-api.herokuapp.com/teachers";

  const postData = async () => {
    const res = await axios.post(url, FormData);
    console.log(res.data);
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Actualizar datos Coordinador</h1>
              <h5 className="widget-user-username">
              {`${dataTeacher.name} ${dataTeacher.f_lastname} ${dataTeacher.m_lastname}`}
            </h5>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  <Link to="Lista_de_citas">Home</Link>
                </li>
                <li className="breadcrumb-item active">Datos coordinador </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="content">
        <div className="card card-widget ">
          <div className="card-footer">
            <div className="row">
              <div className="col-sm-6 border-right">
                <div className="card ">
                  <h5 className="ml-3 mt-2">
                    <b>Credenciales Actuales </b> .
                  </h5>
                  <div className="col-sm-12 ">
                    <div className="card ml-3 mt-2">
                      <form action="../../index.html" method="post">
                        <div className="input-group mb-3">
                          <input
                            type="Correo"
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
                            type="Contraseña"
                            className="form-control"
                            placeholder="Contraseña"
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-lock" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-primary"
                      >
                        Actualizar Credenciales
                      </button>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        style={{ float: "right" }}
                      >
                        Cancelar
                      </button>
                    </div>       
                </div>
              </div>
              <div className="col-sm-6 border-right">
                <div className="card ">
                  <h5 className="ml-3 mt-2">
                    <b>Nuevas Credenciales</b> .
                  </h5>
                  <div className="col-sm-12 ">
                    <div className="card ">
                      <form action="../../index.html" method="post">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nombres y apellidos"
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-user" />
                            </div>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="Correo"
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
                            type="Contraseña"
                            className="form-control"
                            placeholder="Contraseña"
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-lock" />
                            </div>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirmar contraseña"
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-lock" />
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => onSubmit(e)}
                      >
                        Guardar cambios
                      </button>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={(e) => onSubmit(e)}
                        style={{ float: "right" }}
                      >
                        Cancelar
                      </button>
                    </div>       
                
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadDataCoordinator;
