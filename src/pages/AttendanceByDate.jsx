import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Attendance_By_Date = () => {
  // Traer de la api del estudiatne con codigo 160890 en la variable dataStudent

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
  const dataWorkshop = {
    name: "Marko",
    f_lastname: "Castro",
    m_lastname: "Cordova",
    Workshop: "Base de datos",
    date: "12-09-2021"
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Asistencia por fecha</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item active">Talleres</li>
                <li class="breadcrumb-item">Asistencia a Talleres</li>
                <li class="breadcrumb-item">Asistencia por fechas</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <h5>Taller: {dataWorkshop.Workshop} </h5>
            </div>
            <div class="row">
              <h5>Ayudante: {`${dataStudent.name} ${dataStudent.f_lastname} ${dataStudent.m_lastname}`}</h5>
            </div>
            <div class="row">
              <h5>Fecha: {dataWorkshop.date}</h5>
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
                  <h3 className="card-title">Lista de Estudiantes</h3>
                  <div className="card-tools">
</div>
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
                        <th>Código</th>
                        <th>Nombres y Apellidos</th>
                        <th>Detalle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>112323</td>
                        <td>John Doe</td>
                        <td>Asistió</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>112324</td>
                        <td>Alexander Pierce</td>
                        <td>Faltó</td>
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
};

export default Attendance_By_Date;
