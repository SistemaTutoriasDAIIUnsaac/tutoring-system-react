import React from "react";
import { Link } from "react-router-dom";
import Appointments from "../components/Appointments";


function ViewAppointments() {
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

  return (
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
              <h4>
                Tutorado:{" "}
                {`${dataStudent.name} ${dataStudent.f_lastname} ${dataStudent.m_lastname}`}
              </h4>
            </div>
            <Link to="/Nueva_cita/160890"> 
              <button type="submit" class="btn btn-primary mt-2">
                Nueva Cita <i className="fas fa-plus ml-2"></i>
              </button>
            </Link>
          </div>
        </div>        
        {/* /.container-fluid */}
      </section>
      
      <div className="card">
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
                <Appointments />
                <Appointments />
                <Appointments />
              </div>
            </div>
          </div>
          <Link to="list_student">
            <button type="button" className="btn btn-danger float-right">
              <i className="" /> Volver
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ViewAppointments;
