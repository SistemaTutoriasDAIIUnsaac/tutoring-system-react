import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AppointmentsContext from "../context/Appointments/AppointmentsContext";

const DataofAppointment = (props) => {
  const appointmentsContext = useContext(AppointmentsContext);
  const {
    studentSelected,
    appointmentSelected,
    getStudentSelected,
    getAppointment,
  } = appointmentsContext;

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

  useEffect(() => {
    var codAppointment = window.location.pathname;
    codAppointment = codAppointment.replace("/Ver_cita/", "");    
    getAppointment(codAppointment);
  }, []);

  return (
    <Fragment>
      <Header />
      <SideBar />

      {appointmentSelected == null ? (
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                <h1>
                  Cargando ..... 
                </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Datos de Cita</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      {/* <a href="#">Home</a> */}
                      <Link to="Lista_de_citas">Lista de Citas</Link>
                    </li>
                    <li className="breadcrumb-item active">Cita Nueva </li>
                  </ol>
                </div>
              </div>
            </div>
            {
              <div className="card-header text-muted border-bottom-0">
                {`${studentSelected.name} ${studentSelected.f_lastname} ${studentSelected.m_lastname}`}
              </div>
            }
          </section>

          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className=" card card-primary">
                        <div className="card-header">
                          <h3 className="card-title">DETALLES</h3>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-4">
                              {/* textarea */}
                              <div className="form-group ml-5 mt-3">
                                <div className="form-group">
                                  <label>Fecha:</label>
                                  {appointmentSelected != null ? (
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue={
                                        appointmentSelected.date_time
                                      }
                                      disabled
                                    />
                                  ) : (
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="sin fecha"
                                      disabled
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4"></div>
                            <div className="col-sm-3">
                              <div className="form-group ml-5 mt-3">
                                <div className="form-group">
                                  <label>Numero de cita:</label>
                                  {appointmentSelected != null ? (
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue={
                                        appointmentSelected.cod_appointment
                                      }
                                      disabled
                                    />
                                  ) : (
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="sin nro"
                                      disabled
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <form>
                            <div className="row">
                              <div className="col-sm-11">
                                {/* textarea */}
                                <div className="form-group ml-5 mt-3">
                                  <label>Descripción:</label>
                                  {appointmentSelected != null ? (
                                    <textarea
                                      className="form-control"
                                      rows={5}
                                      defaultValue={
                                        appointmentSelected.general_description
                                      }
                                      disabled
                                    />
                                  ) : (
                                    <textarea
                                      className="form-control"
                                      rows={5}
                                      defaultValue="sin descripcion"
                                      disabled
                                    />
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-sm-11">
                                {/* textarea */}
                                <div className="form-group ml-5 mt-2">
                                  <label>Observaciones:</label>
                                  {appointmentSelected != null ? (
                                    <textarea
                                      className="form-control"
                                      rows={5}
                                      defaultValue={
                                        appointmentSelected.private_description
                                      }
                                      disabled
                                    />
                                  ) : (
                                    <textarea
                                      className="form-control"
                                      rows={5}
                                      defaultValue="--"
                                      disabled
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                            {/* /.card-body */}
                          </form>
                        </div>
                        <div className="card-footer">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            style={{ float: "right" }}
                            onClick={(e) => {
                              e.preventDefault();
                              props.history.push(
                                `/Lista_de_citas/${studentSelected.cod_student}`
                              );
                            }}
                          >
                            Volver
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default DataofAppointment;
