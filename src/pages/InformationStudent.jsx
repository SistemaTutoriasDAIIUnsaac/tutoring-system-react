import React, { useState } from "react";
import axios from "axios";

const InformationStudent = () => {
  // Traer de la api del estudiatne con codigo 160890 en la variable dataStudent

  const data = {
    student: {
      cod_student: "160890",
      name: "Marko",
      f_lastname: "Castro",
      m_lastname: "Cordova",
      phone: "983048685",
      email: "160890@unsaac.edu.pe",
      cod_faculty: "#IEEMI",
      cod_career: "#IIS",
      adress: "Calle Domingo Guevara"
    },
    tutor: {
      cod_teacher: "172080",//codigo de docente
      name: "Rozas",//nombre
      f_lastname: "Huacho",//apellidos
      m_lastname: "Huachito",//email
      phone: "987045671"//phone
    },
    workshop: {
      cod_workshop: "123124",
      name_workshop: "Base de Datos - I",
      name: "Marko Leugim"
    }

  }


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
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Mi Informacion</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">Mi Informacion</li>
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  {/* <Link to="Detalle_Servicio"> Detalle Servicio</Link> */}
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* /.container-fluid */}
      </section>
      {/* Main content */}


      <div className="col-md-11 ml-5 mt-2">
        {/* Widget: user widget style 1 */}
        <div className="card card-widget widget-user">
          {/* Add the bg color to the header using any of the bg-* classes */}
          <div className="widget-user-header bg-info">
            <h3 className="widget-user-username">
              {`${dataStudent.name} ${dataStudent.f_lastname} ${dataStudent.m_lastname}`}</h3>
            <h5 className="widget-user-desc">Student</h5>
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
                  <b>Informacion general </b> .
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
            
                {/* /.description-block */}
              </div>
              {/* /.col */}
              <div className="col-sm-4 border-right">
              <div className="card bg-light">
                <h5 className="ml-3 mt-2">
                  <b>Informacion tutor </b> .
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
                {/* /.description-block */}
              </div>
              {/* /.col */}
              <div className="col-sm-4">
              <div className="card bg-light">
                <h5 className="ml-3 mt-2">
                  <b>Informacion talleres </b> .
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
            
                {/* /.description-block */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
        </div>
        {/* /.widget-user */}
      </div>
      {/* /.content */}

      <div className="card-footer ">
            <button type="submit" className="btn btn-primary ml-5 mt-2">
              Salir
            </button>
          </div>
    </div>
  );
};

export default InformationStudent;
