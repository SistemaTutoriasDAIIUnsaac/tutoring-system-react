import React from "react";
import { Link } from "react-router-dom";


function VerListaPorAlumno() {
  // Traer de la api del estudiatne con codigo 160890 en la variable dataStudent
  const dataCourse={
      code:"IN654",
      name:"Base de Datos",
  }

  const dataStudentHelper={
    cod_student: "160890",
    name: "Marko",
    f_lastname: "Castro",
    m_lastname: "Cordova",
    phone: "983048685",
    email: "160890@unsaac.edu.pe",
    cod_faculty: "#IEEMI",
    cod_career: "#IIS",
    adress: "Calle Domingo Guevara",      
  }
  const dataStudent={
    cod_student: "101208",
    name: "Cristian",
    f_lastname: "Palenca",
    m_lastname: "Cueva",
    phone: "983007800",
    email: "101208@unsaac.edu.pe",
    cod_faculty: "#IEEMI",
    cod_career: "#IIS",
    adress: "Calle SN", 
  }
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Asistencia Por Estudiante</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">Taller</li>
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  <Link to="/">Lista de Talleres</Link>
                </li>                
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
        <div class="card">
          <div class="card-body">
            <div class="row">
              <h5>Taller: {dataCourse.name}</h5>
            </div>
            <div class="row">
              <h5>Ayudante: {`${dataStudentHelper.name} ${dataStudentHelper.f_lastname} ${dataStudentHelper.m_lastname}`}</h5>
            </div>
          </div>
        </div>
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">
                      {"Lista de Asistencia de "+dataStudent.name+" "+dataStudent.f_lastname+" "+dataStudent.m_lastname}
                    </h3>
                </div>
                {/* /.card-header */}
                <div
                  className="card-body table-responsive p-0"
                  style={{ height: 300 }}
                >
                  <table className="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Fecha</th>
                        <th>Detalle</th>
                      </tr>
                    </thead>
                    <tbody>            
                      <tr>
                        <td>1.</td>
                        <td>12/03/2021</td>
                        <td>Asistió</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>10/08/2021</td>
                        <td>No Asistió</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
  );
}
export default VerListaPorAlumno;
