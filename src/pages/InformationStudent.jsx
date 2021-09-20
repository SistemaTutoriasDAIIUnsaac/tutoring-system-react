import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const InformationStudent = () => {
  const dataStudent = {
    cod_student: "160890",
    name: "Marko",
    f_lastname: "Castro",
    m_lastname: "Cordova",
    phone: "983048685",
    email: "160890@unsaac.edu.pe",
    cod_faculty: "#IEEMI",
    cod_career: "#IIS",
    adress: "Calle Domingo Guevara",
  };

  const dataTeacher = {
    cod_teacher: "102030",
    name: "Pedrito",
    f_lastname: "Zolano",
    m_lastname: "Siempre",
    phone: "951617181",
    email: "pedritoZolano@solito.com",
  };

  const dataWorkshop = {
    cod_workshop: "TA001",
    workshop_name: "Base de datos",
    f_lastname: "Perez",
    m_lastname: "Alzamora",
    name: "Juan Armando",
    phone: "978651743",
  };

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
                <h1>Mi Información</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Mi Información</li>
                  <li className="breadcrumb-item">
                    {/* <a href="#">Home</a> */}
                    <Link to="Detalle_Servicio"> Detalle Servicio</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="col-md-11 ml-5 mt-2">
          <div className="card card-widget widget-user">
            <div
              className="widget-user-header"
              style={{ backgroundColor: "#eb9b44", color: "#060c2d" }}
            >
              <h3 className="widget-user-username">
                <b>{`${dataStudent.name} ${dataStudent.f_lastname} ${dataStudent.m_lastname}`}</b>
              </h3>
              <h5 className="widget-user-desc"> Estudiante </h5>
            </div>
            <div className="widget-user-image">
              <img
                className="img-circle elevation-2"
                src="../dist/img/user1-128x128.jpg"
                alt="User Avatar"
              />
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="card bg-light">
                    <h5 className="ml-3 mt-2">
                      <b>Información general</b>



                      ---
                      <button
                        type="button"
                        class="btn btn-default"
                        data-toggle="modal"
                        data-target="#modal-default"
                      >
                        
                        <a class="btn btn-app">
                          <i class="fas fa-edit"></i> Editar
                        </a>
                       
                      </button>
                      <div
                        className="modal fade"
                        id="modal-default"
                        style={{ display: "none" }}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4 className="modal-title">Default Modal</h4>
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
                              <p>One fine body…</p>
                            </div>
                            <div className="modal-footer justify-content-between">
                              <button
                                type="button"
                                className="btn btn-default"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                          {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                      </div>


                      ---------
                    </h5>
                    <div className="card-header text-muted border-bottom-0">
                      <p className="text-muted text-sm mb-0">
                        <b>Codigo: </b> {dataStudent.cod_student}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Email: </b> {dataStudent.email}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Codigo de Facultad: </b> {dataStudent.cod_faculty}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Codigo de Carrera: </b> {dataStudent.cod_career}
                      </p>
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-building" />
                              </span>{" "}
                              Direccion: {dataStudent.adress}
                            </li>
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-phone" />
                              </span>{" "}
                              # de celular: {dataStudent.phone}
                            </li>
                          </ul>
                          <p className="text-muted text-sm mb-0">
                            <b>Persona de referencia: </b> Joaquin Castro Luna
                          </p>

                          <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small">
                              <span className="fa-li">
                                <i className="fas fa-lg fa-phone" />
                              </span>{" "}
                              # de celular: 974459590
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 border-right">
                  <div className="card bg-light">
                    <h5 className="ml-3 mt-2">
                      <b>Información tutor </b>
                    </h5>
                    <div className="card-header text-muted border-bottom-0">
                      <p className="text-muted text-sm mb-0">
                        <b>Codigo: </b> {dataTeacher.cod_teacher}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Apellidos y nombres: </b>
                        {`${dataTeacher.name} ${dataTeacher.f_lastname} ${dataTeacher.m_lastname}`}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Email: </b>
                        {dataTeacher.email}
                      </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small">
                          <span className="fa-li">
                            <i className="fas fa-lg fa-phone" />
                          </span>{" "}
                          {dataTeacher.phone}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card bg-light">
                    <h5 className="ml-3 mt-2">
                      <b>Información talleres </b>
                    </h5>
                    <div className="card-header text-muted border-bottom-0">
                      <p className="text-muted text-sm mb-0">
                        <b>Codigo curso: </b> {dataWorkshop.cod_workshop}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Nombre: </b> {dataWorkshop.workshop_name}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Estudiante ayudante a cargo:</b>
                        {`${dataWorkshop.name} ${dataWorkshop.f_lastname} ${dataWorkshop.m_lastname}`}
                      </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small">
                          <span className="fa-li">
                            <i className="fas fa-lg fa-phone" />
                          </span>{" "}
                          # de celular: {dataWorkshop.phone}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <button
            type="submit"
            className="btn btn-danger float-right"
            style={{ marginLeft: "35px" }}
          >
            Volver
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            style={({ marginLeft: "35px" }, { backgroundColor: "#060c2d" })}
          >
            Guardar
          </button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default InformationStudent;
