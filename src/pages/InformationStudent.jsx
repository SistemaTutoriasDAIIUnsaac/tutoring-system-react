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
    adress: "Calle Domingo Guevara"
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
        <div className="card-header text-muted border-bottom-0">
          {`${dataStudent.name} ${dataStudent.f_lastname} ${dataStudent.m_lastname}`}          
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
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
                          Direccion: Calle Domingo Guevara
                        </li>
                        <li className="small">
                          <span className="fa-li">
                            <i className="fas fa-lg fa-phone" />
                          </span>{" "}
                          # de celular: 983048685
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
                    <div className="col-5 text-center">
                      <img
                        src="../../dist/img/user1-128x128.jpg"
                        alt="user-avatar"
                        className="img-circle img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card bg-light">
                <h5 className="ml-3 mt-2">
                  <b>Informacion tutor </b> .
                </h5>
                <div className="card-header text-muted border-bottom-0">
                  <p className="text-muted text-sm mb-0">
                    <b>Codigo: </b> 908070
                  </p>
                  <p className="text-muted text-sm mb-0">
                    <b>Apellidos y nombres: </b> Rogelio Torres Torritos
                  </p>
                  <p className="text-muted text-sm mb-0">
                    <b>Email: </b>torritosTerrones@rogelio.com
                  </p>
                  <ul className="ml-4 mb-0 fa-ul text-muted">
                    <li className="small">
                      <span className="fa-li">
                        <i className="fas fa-lg fa-phone" />
                      </span>{" "}
                      # de celular: 99887-1245
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card bg-light">
                <h5 className="ml-3 mt-2">
                  <b>Informacion talleres </b> .
                </h5>
                <div className="card-header text-muted border-bottom-0">
                  <p className="text-muted text-sm mb-0">
                    <b>Codigo curso: </b> IF425
                  </p>
                  <p className="text-muted text-sm mb-0">
                    <b>Nombre: </b> Base de datos
                  </p>
                  <p className="text-muted text-sm mb-0">
                    <b>Estudiante ayudante a cargo:</b> Carlos Jimenez Alcantara
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
            <div className="ml-3 mt-2">
              <h6 className="ml-0 mt-0 ">
                Desea compartir su informacion privada cuando solicite cambio de
                tutor?
              </h6>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="terms"
                  className="custom-control-input"
                  id="exampleCheck1"
                />
                <label className="custom-control-label" htmlFor="exampleCheck1">
                  I agree
                </label>
                <div class="card-footer ml-0 mt-0">
                  <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
};

export default InformationStudent;
