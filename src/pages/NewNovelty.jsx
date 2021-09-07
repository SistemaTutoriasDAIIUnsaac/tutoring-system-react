import React from "react";
import { Link } from "react-router-dom";

const NewNovelty = () => {
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

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Nueva Novedad</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  <Link to="/">Lista de Novedades</Link>
                </li>
                <li className="breadcrumb-item active">Nueva Novedad </li>
              </ol>
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
                <div className="card-body">
                  <div className=" card card-primary">
                    <div className="card-header"></div>

                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-3"></div>
                      </div>
                      <form>
                        <div className="row">
                          <div className="form-group " style={{marginLeft: 55,width:"85%"}}>
                            <label htmlFor="exampleInputPassword1">
                              Titulo
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Código de Estudiante"
                              name="cod_student"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-11">
                            {/* texDescripcion */}
                            <div className="form-group ml-5 mt-3">
                              <label>Descripción</label>
                              <textarea
                                className="form-control"
                                rows={5}
                                placeholder="Enter ..."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="form-group " style={{marginLeft: 55,width:"85%"}}>
                            <label htmlFor="exampleInputPassword1">
                              Para
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Código de Estudiante"
                              name="cod_student"
                            />
                          </div>
                        </div>
                        {/* /.card-body */}
                      </form>
                    </div>
                    <div className="card-footer">
                      <Link to="/">
                        <button type="submit" className="btn btn-primary">
                          Guardar
                        </button>
                      </Link>
                      <Link to="/">
                        <button
                          type="submit"
                          className="btn btn-danger"
                          style={{ float: "right" }}
                        >
                          Cancelar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewNovelty;