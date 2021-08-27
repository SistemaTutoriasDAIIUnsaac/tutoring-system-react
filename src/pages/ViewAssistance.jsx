import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";

function ViewAssistance() {
  const [DataAssistance, setDataAssistance] = useState([]);
  const columns = [
    { title: "Código", field: "code" },

    { title: "Nombres y Apellidos", field: "full_name" },
  ];

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
              <h1>Asistencia a talleres</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">Talleres</li>
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  <Link to="Detalle_Servicio"> Asistencia a talleres</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>

      <section className="content">
        <div className="container-fluid">
          
          <div className="row">
            <div className="col-12">
              <div className="card">
                {/* /.card-header */}
                <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                      {/* textarea */}
                      <div className="form-group ml-5 mt-3">
                        <div className="form-group">
                          <label>Taller:</label> {dataWorkshop.workshop_name}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      {/* textarea */}
                      <div className="form-group  mt-3">
                        <div className="form-group">
                        <div className="form-group">
                          <label>Estudiante ayudante:</label> {dataWorkshop.name}
                        </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                
                  <div className="row">
                    <div className="col-sm-3">
                      {/* textarea */}
                      <div className="form-group ml-5 mt-3">
                        <div className="form-group">
                          <label>Asistencia por fecha:</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      {/* textarea */}
                      <div className="form-group  mt-3">
                        <div className="form-group">
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      {/* textarea */}
                      <div className="form-group ml-5 mt-3">
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary">
                            Ver Lista
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
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
                  <MaterialTable
                    title="Asistencia por estudiante"
                    data={DataAssistance}
                    columns={columns}
                    options={{
                      search: true,
                      paging: true,
                      filtering: true,
                      exportButton: true,
                      actions: true,
                      actionsColumnIndex: -1,
                      pageSize: 10,
                    }}
                    actions={[
                      {
                        icon: "eye",
                        tooltip: "Ver asistencia",
                        onClick: (ev, rowData) => console.log("Ver asistencia"),
                      },
                    ]}
                  />
                  <Link to="/">
                    <button type="submit" className="btn btn-danger ml-8 mt-3">
                      Volver
                    </button>
                  </Link>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
}

export default ViewAssistance;
