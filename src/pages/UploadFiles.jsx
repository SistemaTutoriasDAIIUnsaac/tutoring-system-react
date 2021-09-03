import React from "react";
import { Link } from "react-router-dom";

const UploadFiles = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Subir Archivos</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  <Link to="Lista_de_citas">Home</Link>
                </li>
                <li className="breadcrumb-item active">Subir archivos </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10">
              <div className="card">
                <div className="card-body">
                  <div className="callout callout-info">
                    <h6>
                      <b>Subir datos de docente</b>
                    </h6>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          {/* <label for="customFile">Custom File</label> */}
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="customFile"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFile"
                            >
                              Escoger archivo
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <button
                          type="button"
                          className="btn btn-primary float-right"
                        >
                          <i className="" /> Guardar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="callout callout-info">
                    <h6>
                      <b>Subir datos de estudiantes</b>
                    </h6>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          {/* <label for="customFile">Custom File</label> */}
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="customFile"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFile"
                            >
                              Escoger archivo
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <button
                          type="button"
                          className="btn btn-primary float-right"
                        >
                          <i className="" /> Guardar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="callout callout-info">
                    <h6>
                      <b>Subir avance curricular</b>
                    </h6>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          {/* <label for="customFile">Custom File</label> */}
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="customFile"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFile"
                            >
                              Escoger archivo
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <button
                          type="button"
                          className="btn btn-primary float-right"
                        >
                          <i className="" /> Guardar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-footer">
                <Link to="/">
                  <button type="button" className="btn btn-danger" style={{marginLeft:20,marginBottom:12}}>
                    <i className="" /> Volver
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
};

export default UploadFiles;
