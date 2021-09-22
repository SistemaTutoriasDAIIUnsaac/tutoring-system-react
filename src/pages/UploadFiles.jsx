import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const UploadFiles = () => {
  const [Img, setImg] = useState();

  const fileSelectedHandler = (event) => {
    const img = event.target.files[0];
    console.log(img);
    setImg(img);
  };

  return (
    <Fragment>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Subir Archivos</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Home</li>
                  <li className="breadcrumb-item">
                    <Link to="Nueva_cita">subir Archivos</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <section className="content-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="card card-primary">
                      <div
                        className="card-header"
                        style={{ backgroundColor: "#eb9b44" }}
                      >
                        <h4
                          className="card-title"
                          style={{ color: "#060c2d", height: "0.4cm" }}
                        >
                          <b>Subir datos docente</b>
                        </h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-7">
                            <div className="form-group">
                              {/* <label for="customFile">Custom File</label> */}
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="customFile"
                                  onChange={fileSelectedHandler}
                                />
                                <label
                                  className="custom-file-label"
                                  htmlFor="customFile"
                                >
                                  Seleccione archivo...
                                </label>
                                {/* <img src={Img} alt="new image" /> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-4" >
                            <button
                              type="button"
                              className="btn float-right"
                              style={{
                                color: "#ffffff",
                                backgroundColor: "#060c2d",
                              }}
                            >
                              <Link to = "/lista_de_tutores">
                              <i className="fas fa-lg fa-upload" /> Subir
                              archivo
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-primary">
                      <div
                        className="card-header"
                        style={{ backgroundColor: "#eb9b44" }}
                      >
                        <h4
                          className="card-title"
                          style={{ color: "#060c2d", height: "0.4cm" }}
                        >
                          <b>Subir datos estudiante</b>
                        </h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-7">
                            <div className="form-group">
                              {/* <label for="customFile">Custom File</label> */}
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="customFile"
                                  onChange={fileSelectedHandler}
                                />
                                <label
                                  className="custom-file-label"
                                  htmlFor="customFile"
                                >
                                  Seleccione archivo...
                                </label>
                                {/* <img src={Img} alt="new image" /> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <button
                              type="button"
                              className="btn float-right"
                              style={{
                                color: "#ffffff",
                                backgroundColor: "#060c2d",
                              }}
                            >
                              <i className="fas fa-lg fa-upload" /> Subir
                              archivo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-primary">
                      <div
                        className="card-header"
                        style={{ backgroundColor: "#eb9b44" }}
                      >
                        <h4
                          className="card-title"
                          style={{ color: "#060c2d", height: "0.4cm" }}
                        >
                          <b>Subir avance curricular</b>
                        </h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-7">
                            <div className="form-group">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    className="form-control"
                                    class="custom-file-input"
                                    id="customFile"
                                    onChange={fileSelectedHandler}
                                  />
                                  <label
                                    className="custom-file-label"
                                    for="customFile"
                                  >
                                    Seleccione archivo...
                                  </label>
                                  {/* <img src={Img} alt="new image" /> */}
                                </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <button
                              type="button"
                              className="btn float-right"
                              style={{
                                color: "#ffffff",
                                backgroundColor: "#060c2d",
                              }}
                            >
                              <i className="fas fa-lg fa-upload" /> Subir
                              archivo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="/novedades">
                      <button
                        type="button"
                        className="btn btn-danger float-right"
                      >
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
      <Footer />
    </Fragment>
  );
};

export default UploadFiles;
