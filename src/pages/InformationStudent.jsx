import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AuthContext from "../context/Authentication/authContext";

const InformationStudent = () => {
  const authContext = useContext(AuthContext);
  const { user, getUser } = authContext;

  const [DataStudent, setDataStudent] = useState({
    cod_student: "",
    name: "",
    f_lastname: "",
    m_lastname: "",
    phone: "",
    email: "",
    cod_faculty: "#IEEMI",
    cod_career: "#IIS",
    adress: "Calle Domingo Guevara",
  });

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

  useEffect(() => {
    setDataStudent(user);
  }, [user]);

  return (
    <Fragment>
      <Header />
      <SideBar />

      {user == null ? (
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Cargando ...</h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
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
                  <b>{`${DataStudent.name} ${DataStudent.f_lastname} ${DataStudent.m_lastname}`}</b>
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
                        <button
                          type="button"
                          className="btn btn-default float-right mr-1"
                          data-toggle="modal"
                          data-target="#modal-update-data"
                        >
                          <i className="fas fa-edit"></i>Editar
                        </button>
                        {/* ------- MODAL UPDATE DATA STUDENT ------- */}
                        <div
                          className="modal fade"
                          id="modal-update-data"
                          // style={{ display: "none" }}
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title">
                                  Actualizacion de Datos
                                </h4>
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
                                <div className="row">
                                  {/* <div className="col-md-12"> */}
                                  <div className="col-md-12">
                                    <div className="card card-primary">
                                      {/* <div className="card-header">
                                      <h3 className="card-title">
                                        Datos Personales
                                      </h3>
                                    </div> */}
                                      <div className="card-body">
                                        Datos estudiante
                                        <hr />
                                        <div className="form-group row">
                                          <label className="col-sm-3 col-form-label">
                                            Codigo:
                                          </label>
                                          <div className="col-sm-9">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Codigo"
                                              defaultValue={
                                                DataStudent.cod_student
                                              }
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label className="col-sm-3 col-form-label">
                                            Nombres:
                                          </label>
                                          <div className="col-sm-9">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Nombres"
                                              defaultValue={DataStudent.name}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label className="col-sm-3 col-form-label">
                                            Apellidos:
                                          </label>
                                          <div className="col-sm-9">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Apellidos"
                                              defaultValue={                                                
                                                `${user.f_lastname} ${user.m_lastname}`                                              
                                              }
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label className="col-sm-3 col-form-label">
                                            Correo:
                                          </label>
                                          <div className="col-sm-9">
                                            <input
                                              type="email"
                                              className="form-control"
                                              placeholder="Correo"
                                              defaultValue={user.email}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label className="col-sm-3 col-form-label">
                                            Dirección:
                                          </label>
                                          <div className="col-sm-9">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Dirección"
                                              defaultValue={user.adress}
                                            />
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label className="col-sm-3 col-form-label">
                                            Telefono:
                                          </label>
                                          <div className="col-sm-9">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Teléfono"
                                              defaultValue={user.phone}
                                            />
                                          </div>
                                        </div>
                                        Persona de referencia
                                        <hr />
                                        <div className="form-group row mt-2">
                                          <label className="col-sm-3 col-form-label">
                                            Nombres:
                                          </label>
                                          <div className="col-sm-9">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Nombres"
                                              defaultValue={user.reference_person}
                                            />
                                          </div>
                                        </div>                                        
                                        <div className="form-group row mt-2">
                                          <label className="col-sm-3 col-form-label">
                                            Teléfono:
                                          </label>
                                          <div className="col-sm-9">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Telefono"
                                              defaultValue={user.phone_reference_person}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* </div> */}
                                </div>
                              </div>
                              <div className="modal-footer justify-content-between">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-dismiss="modal"
                                >
                                  Cancelar
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  style={{ backgroundColor: "#060c2d" }}
                                >
                                  Guardar Cambios
                                </button>
                              </div>
                            </div>
                            {/* /.modal-content */}
                          </div>
                          {/* /.modal-dialog */}
                        </div>
                      </h5>
                      <div className="card-header text-muted border-bottom-0">
                        <p className="text-muted text-sm mb-0">
                          <b>Codigo: </b> {DataStudent.cod_student}
                        </p>
                        <p className="text-muted text-sm mb-0">
                          <b>Email: </b> {DataStudent.email}
                        </p>
                        <p className="text-muted text-sm mb-0">
                          <b>Codigo de Facultad: </b> {"FIEEIM"}
                        </p>
                        <p className="text-muted text-sm mb-0">
                          <b>Codigo de Carrera: </b> {"IIS"}
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
                                Direccion: {DataStudent.adress}
                              </li>
                              <li className="small">
                                <span className="fa-li">
                                  <i className="fas fa-lg fa-phone" />
                                </span>{" "}
                                # de celular: {DataStudent.phone}
                              </li>
                            </ul>
                            <p className="text-muted text-sm mb-0">
                              <b>Persona de referencia: </b>{" "}
                              {DataStudent.reference_person}
                            </p>

                            <ul className="ml-4 mb-0 fa-ul text-muted">
                              <li className="small">
                                <span className="fa-li">
                                  <i className="fas fa-lg fa-phone" />
                                </span>{" "}
                                # de celular:{" "}
                                {DataStudent.phone_reference_person}
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
              style={{ marginLeft: "35px", backgroundColor: "#060c2d" }}
            >
              Guardar
            </button>
          </div>
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default InformationStudent;
