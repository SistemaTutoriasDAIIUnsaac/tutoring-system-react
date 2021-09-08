import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Appointments from "../components/Appointments";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AppointmentsContext from "../context/Appointments/AppointmentsContext";

function ViewAppointments() {
  const appointmentsContext = useContext(AppointmentsContext);
  const {
    getStudentSelected,
    studentSelected,
    getAppointmentList,
    appointmentList,
    cleanAppointment
  } = appointmentsContext;

  useEffect(() => {
    var codStudent = window.location.pathname;
    codStudent = codStudent.replace("/Lista_de_citas/", "");
    getStudentSelected(codStudent);
    getAppointmentList(codStudent);
    cleanAppointment();
  }, []);

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
                <h1>Citas</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Lista de Citas</li>
                  <li className="breadcrumb-item">
                    <Link to="/Nueva_cita/160890"> Nueva Cita</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row">
                {studentSelected != null ? (
                  <h4>
                    Tutorado:{" "}
                    {` ${studentSelected.name} ${studentSelected.f_lastname} ${studentSelected.m_lastname}`}
                  </h4>
                ) : (
                  <h4>Tutorado:{`No se tiene datos del estudiante`}</h4>
                )}
              </div>
              {studentSelected != null ? (
                <Link to={`/Nueva_cita/${studentSelected.cod_student}`}>
                <button type="submit" class="btn btn-primary mt-2">
                  Nueva Cita <i className="fas fa-plus ml-2"></i>
                </button>
              </Link>
              ) : (
                <Link to={`/Nueva_cita/error_cod_student`}>
                <button type="submit" class="btn btn-primary mt-2">
                  Nueva Cita <i className="fas fa-plus ml-2"></i>
                </button>
              </Link>
              )
                
              }
              
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="card card-primary">
                      <div className="card-header">
                        <h4 className="card-title">Lista de Citas</h4>
                      </div>

                      <div className="card-body">
                        <div
                          style={{
                            overflowY: "scroll",
                            height: 285,
                            paddingRight: 30,
                            paddingLeft: 30,
                          }}
                        >
                          <div className="card-header" style={{ padding: 1 }} />
                          {appointmentList.map((item, index) => (
                            <Appointments data={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Link to="/Lista_de_Tutorados">
                      <button
                        type="button"
                        className="btn btn-danger float-right"
                      >
                        <i className="" /> Volver
                      </button>
                    </Link>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
      </div>
      <Footer />
    </Fragment>
  );
}

export default ViewAppointments;
