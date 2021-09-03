import { React, Fragment } from "react";
import { Link } from "react-router-dom";


function StudentsHelpersList() {
  return (
    <Fragment>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Lista de Estudiantes Ayudantes</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    {/* <a href="#">Home</a> */}
                    Lista de Estudiantes Ayudantes
                  </li>
                  <li className="breadcrumb-item active">
                    <Link to="Editar_Lista_De_Estudiantes_Ayudantes">
                      {" "}
                      Editar lista de Estudiantes Ayudantes
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
            <Link to="Editar_Lista_De_Estudiantes_Ayudantes">
              <button type="submit" className="btn btn-success">
                Editar Lista
              </button>
            </Link>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div className="col-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Estudiantes Ayudantes</h3>
                  </div>
                  {/* /.card-header */}
                    <table className="table table-head-fixed text-nowrap">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Código</th>
                          <th>Nombres y Apellidos</th>
                          <th>Curso para Taller</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>170989</td>
                          <td>Juan Flores Quispe</td>
                          <td>Base de Datos</td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>179989</td>
                          <td>Melanie Indira Sullca Peralta</td>
                          <td>Computación Gráfica</td>
                        </tr>
                      </tbody>
                    </table>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default StudentsHelpersList;
