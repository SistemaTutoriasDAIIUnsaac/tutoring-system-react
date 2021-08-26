import React, { Fragment } from "react";
import SchedulesAvailable from "./SchedulesAvailable";
import { Link } from "react-router-dom";

const Time_Availability = () => {
  return (
    <Fragment>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Disponibilidad Horaria</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">
                    Disponibilidad Horaria
                  </li>
                  <li className="breadcrumb-item">
                    {/* <a href="#">Home</a> */}
                    <Link to="Horarios">Horarios</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <div className="card">
          <div className="card-body">
            <div className="card card-primary">
              <div className="card-header">
                <h4 className="card-title">Registrar Horarios</h4>
              </div>

              <div className="card-body">
                <div
                  style={{
                    overflowY: "scroll",
                    height: 300,
                    paddingRight: 30,
                    paddingLeft: 30,
                  }}
                >
                  <div className="card-header" style={{ padding: 1 }} />
                  <SchedulesAvailable />
                  <SchedulesAvailable />
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-success float-right">
              <i className="" /> Guardar
            </button>
            <button type="button" className="btn btn-primary float-left">
              <i className="" /> Agregar <i class="fas fa-plus ml-2"></i>
            </button>
          </div>
        </div>
      </div>
      );
    </Fragment>
  );
};
export default Time_Availability;
