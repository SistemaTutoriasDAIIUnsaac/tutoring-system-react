import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AppointmentsContext from "../context/Appointments/AppointmentsContext";
import AuthContext from "../context/Authentication/authContext";
import MaterialTable from "material-table";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

function Tutored(props) {



  const columns = [
    { title: "Código", field: "cod_student" },
    { title: "Nombres", field: "name" },
    { title: "Apellido Paterno", field: "f_lastname" },
    { title: "Apellido Materno", field: "m_lastname" },    
    { title: "Teléfono", field: "phone" },
    { title: "Correo", field: "email" },
  ];

  const { setLastURL } = useContext(AuthContext);
  const { getStudentsList, studentsList, studentSelected, getStudentSelected } = useContext(AppointmentsContext);

  useEffect(() => {
    // getUserData();
    setLastURL();
    getStudentsList();
    console.log(studentsList);
  }, []);

  return (
    <Fragment>
      <Header />
      <SideBar />

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
                <div className="card" >
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
                        maxBodyHeight: 495,
                        // showEmptyDataSourceMessage: true,
                        
                      }}
                      actions={[
                        // {
                        //   icon: "delete",
                        //   tooltip: "Borrar Estudiante",
                        //   onClick: (ev, rowData) =>
                        //     console.log("Borrar Estudiante"),
                        // },
                        // {
                        //   icon: "edit",
                        //   tooltip: "Editar Estudiante",
                        //   onClick: (ev, rowData) =>
                        //     console.log("Editar Estudiante"),
                        // },
                        {
                          icon: "visibility",
                          tooltip: "Ver Lista de Citas",
                          onClick: (ev, rowData) => {
                            console.log("Ver Cita")
                            getStudentSelected(rowData.cod_student);
                            props.history.push(`/Lista_de_citas/${rowData.cod_student}`)}
                        },
                      ]}
                    />
                    <Link to="/Novedades">
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
     
      <Footer />
    </Fragment>
  );
}

export default Tutored;
