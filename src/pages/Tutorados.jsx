import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppointmentsContext from "../context/Appointments/AppointmentsContext"
import MaterialTable from "material-table";


function Tutorados() {

  const columns = [
    { title: "Código", field: "cod_student"},
    { title: "Nombre", field: "name" },
    { title: "Apellido Paterno", field: "f_lastname" },
    { title: "Apellido Materno", field: "m_lastname" },
    { title: "Teléfono", field: "phone" },
    { title: "Correo", field: "email" }
  ]

  const { getStudentsList, studentsList } = useContext(AppointmentsContext);

  useEffect( () => {
    getStudentsList();
    console.log(studentsList)
  }, []);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Lista de Tutorados</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">Tutorados</li>
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  <Link to="Nuevo_Estudiante"> Nuevo Tutorado</Link>
                </li>
              </ol>
            </div>
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
                    <MaterialTable
                      title="Tutorados"
                      data={studentsList}
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
                          icon: "delete",
                          tooltip: "Borrar Estudiante",
                          onClick: (ev, rowData) =>
                            console.log("Borrar Estudiante"),
                        },
                        {
                          icon: "edit",
                          tooltip: "Editar Estudiante",
                          onClick: (ev, rowData) =>
                            console.log("Editar Estudiante"),
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

export default Tutorados;
