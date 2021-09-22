import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

function DistributeStudents() {
  const [ModalPassword, setModalPassword] = useState("");

  const handleModalPassword = (e) => {
    setModalPassword(e.target.value);
    console.log(ModalPassword);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    console.log(`Autodesctruccion lanzada, codigo: ${ModalPassword}`);
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
                <h1>Distribucion de estudiantes a tutores</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Home</li>
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                    <Link to="/"> Home</Link>
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
              <div className="col-md-12">
                <div className="card">
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* /.card-body */}
                    {/* <div className="row"> */}
                    <div
                      className="center"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "20vh",
                      }}
                    >
                      <button
                        className="col-md-8 btn mb-5"
                        style={{ height: 50 }}
                        data-toggle="modal"
                        data-target="#modal-default"
                        style={{ color: "white" ,backgroundColor: "#060c2d"}}
                      >
                        <h4> -- Distribuir Alumnos -- </h4>
                      </button>
                    </div>
                    {/* </div> */}
                    <div className="card card-secondary">
                      <div className="card-header">
                        <h3 className="card-title">Danger</h3>
                      </div>
                      <div className="card-body">The body of the card</div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card-body end */}
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
        <div
          className="modal fade"
          id="modal-default"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Confirmar usuario</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={onSubmit}></form>
                <label>Ingrese su Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  id="ModalPassword"
                  onChange={handleModalPassword}
                />
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn"
                  data-dismiss="modal"
                  style={{ color: "white" ,backgroundColor: "#060c2d"}}
                  // onSubmit={onSubmit}
                  onClick={(e) => onSubmit(e)}
                >
                  Distribuir
                </button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default DistributeStudents;
