import React, {useState } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";


function ViewAssistance() {
  const [DataAssistance] = useState([]);
  const columns = [
    { title: "Código", field: "code" },

    { title: "Nombres y Apellidos", field: "full_name" },
  ];

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

      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="form-group ml-5 mt-3">
                        <div className="form-group">
                          <label>Taller:</label> {dataWorkshop.workshop_name}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="form-group  mt-3">
                        <div className="form-group">
                          <div className="form-group">
                            <label>Estudiante ayudante:</label>{" "}
                            {dataWorkshop.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <div className="form-group ml-5 mt-3">
                        <div className="form-group">
                          <label>Asistencia por fecha:</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group  mt-3">
                        <div className="form-group">
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                { /*Tabla */}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewAssistance;
