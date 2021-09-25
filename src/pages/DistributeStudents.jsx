import React, { Fragment, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AdminContext from "../context/AdminFunctions/adminContext";

function DistributeStudents() {

  const adminContext = useContext(AdminContext);
  const { distributeStudents, adminMessage } = adminContext;

  const [ModalPassword, setModalPassword] = useState("");

  const handleModalPassword = (e) => {
    setModalPassword(e.target.value);
    console.log(ModalPassword);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    distributeStudents()
  };

  useEffect(() => {
    if (adminMessage) {
      console.log(adminMessage);
    }
  },[adminMessage]);

  return (
    <Fragment>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Distribucion de estudiantes a tutores</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Home</li>
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                    <Link to="/"> Home</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* /.card-body */}
                    {/* <div className="row"> */}
                    <div
                      className="center"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "20vh",
                      }}
                    >
                      <button
                        className="col-md-8 btn mb-5"
                        style={{ height: 50 }}
                        data-toggle="modal"
                        data-target="#modal-default"
                        style={{ color: "white" ,backgroundColor: "#060c2d"}}                      
                      >
                        <h4> -- Distribuir Alumnos -- </h4>
                      </button>
                    </div>
                    {/* </div> */}
                    <div className="card card-danger">
                      <div className="card-header">
                        <h3 className="card-title">Cuidado</h3>
                      </div>
                      <div className="card-body">La distribucion de alumnos toma todos los alumnos que se encuentren en el sistema y los distribuye
                      equitativamente a los tutores que se encuentren en el sistema. 
                      <div>
                        <ul>
                          <li>
                          Si un tutor ya tiene alumnos asignados, este mantendra sus alumnos,
                          y solo se le asignaran los nuevos alumnos, si existiesen.       
                          </li>
                          <li>
                          Si un estudiante no tiene tutor asignado, este sera asignado a un tutor 
                          que tenga menos alumnos asignados.
                          </li>
                          <li>
                          Si todos los tutores tienen la misma cantidad de alumnos asignados la distribucion de los nuevos 
                          alumnos sera equitativa.
                          </li>
                        </ul>
                      </div>                                                                                  
                      <br />
                      NOTA: Debe tener cuidado puesto que este cambio es muy dificil de revertir, se recomienda realizar la distribucion de alumnos,
                      solo una vez por Programa de Tutoria.
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card-body end */}
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
        <div
          className="modal fade"
          id="modal-default"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Confirmar usuario</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={onSubmit}></form>
                <label>Ingrese su Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  id="ModalPassword"
                  onChange={handleModalPassword}
                />
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn"
                  data-dismiss="modal"
                  style={{ color: "white" ,backgroundColor: "#060c2d"}}
                  // onSubmit={onSubmit}
                  onClick={(e) => {onSubmit(e)}}
                >
                  Distribuir
                </button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default DistributeStudents;
