import React, { Fragment, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AuthContext from "../context/Authentication/authContext";

const InformationPrincipal = (props) => {
  const authContext = useContext(AuthContext);
  const { user, authenticated } = authContext;

  useEffect(() => {
    setDataPrincipal(user);
  }, [user]);

  const [DataPrincipal, setDataPrincipal] = useState({
    cod_coordinator: "",
    name: "",
    f_lastname: "",
    m_lastname: "",
    phone: "",
    email: "",
    filiation: "",
    category: "",

  });

  return (
    <Fragment>
      <Header />
      <SideBar />
      {
        user == null ? (
          <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Mi Información</h1>
                </div>
                <div className="col-sm-6">
                  {/* <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item active">Mi Información</li>
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                      <Link to="Detalle_Servicio"> Detalle Servicio</Link>
                    </li>
                  </ol> */}
                </div>
              </div>
            </div>
          </section>
          </div>    
        ) : (
          <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Mi Información</h1>
              </div>
              <div className="col-sm-6">
                {/* <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Mi Información</li>
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                    <Link to="Detalle_Servicio"> Detalle Servicio</Link>
                  </li>
                </ol> */}
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="col-md-8">
          <div className="card card-widget widget-user">
            <div
              className="widget-user-header"
              style={{ backgroundColor: "#eb9b44", color: "#060c2d" }}
            >
              <h3 className="widget-user-username">
                <b>{`${DataPrincipal.name} ${DataPrincipal.f_lastname} ${DataPrincipal.m_lastname}`}</b>
              </h3>
              <h5 className="widget-user-desc"> Director(a) de Escuela </h5>
            </div>
            <div className="widget-user-image">
              <img
                className="img-circle elevation-2"
                src="../dist/img/user1-128x128.jpg"
                alt="User Avatar"
              />
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-12">
                  <div className="card body">
                    <h5 className="ml-3 mt-2">
                      <b>Información general</b>
                      <button
                        type="button"
                        className="btn btn-default float-right mr-1"
                        data-toggle="modal"
                        data-target="#modal-update-data"
                      >
                        <i className="fas fa-edit"></i>Editar
                      </button>
                      {/* ------- MODAL UPDATE DATA COORDINATOR ------- */}
                      <div
                        className="modal fade"
                        id="modal-update-data"
                        // style={{ display: "none" }}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4 className="modal-title">
                                Actualizacion de Datos
                              </h4>
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
                              <div className="row">
                                {/* <div className="col-md-12"> */}
                                <div className="col-md-12">
                                  <div className="card card-primary">
                                    {/* <div className="card-header">
                                      <h3 className="card-title">
                                        Datos Personales
                                      </h3>
                                    </div> */}
                                    <div className="card-body">
                                      Datos Director(a) de Escuela
                                      <hr />
                                      <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                          Nombres:
                                        </label>
                                        <div className="col-sm-9">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombres"
                                            defaultValue={`${DataPrincipal.name}`}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                          Apellidos:
                                        </label>
                                        <div className="col-sm-9">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Apellidos"
                                            defaultValue={`${user.f_lastname} ${user.m_lastname}`}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                          Correo:
                                        </label>
                                        <div className="col-sm-9">
                                          <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Correo"
                                            defaultValue={`${DataPrincipal.email}`}
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                          Telefono:
                                        </label>
                                        <div className="col-sm-9">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Teléfono"
                                            defaultValue={`${DataPrincipal.phone}`}
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                          Filiación:
                                        </label>
                                        <div className="col-sm-9">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Filiacion"
                                            defaultValue={`${DataPrincipal.filiation}`}
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                          Categoría:
                                        </label>
                                        <div className="col-sm-9">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Categoria"
                                            defaultValue={`${DataPrincipal.category}`}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* </div> */}
                              </div>
                            </div>
                            <div className="modal-footer justify-content-between">
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                              >
                                Cancelar
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                style={{ backgroundColor: "#060c2d" }}
                              >
                                Guardar Cambios
                              </button>
                            </div>
                          </div>
                          {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                      </div>
                    </h5>
                    <div className="card-header text-muted border-bottom-0">                      
                      <p className="text-muted text-sm mb-0">
                        <b>Nombre: </b> {DataPrincipal.name}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Apellido paterno: </b> {DataPrincipal.f_lastname}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Apellido materno: </b> {DataPrincipal.m_lastname}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Email: </b> {DataPrincipal.email}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Filiacion: </b> {DataPrincipal.filiation}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Categoria: </b> {DataPrincipal.category}
                      </p>
                      <p className="text-muted text-sm mb-0">
                        <b>Director(a) Email: </b> {DataPrincipal.username}
                      </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted mt-2">
                        <li className="small">
                          <span className="fa-li">
                            <i className="fas fa-lg fa-phone" />
                          </span>{" "}
                          # de celular: {DataPrincipal.phone}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <button
            type="submit"
            className="btn btn-danger float-left"
            style={{ marginLeft: "35px" }}
            onClick={props.history.goBack}
          >
            Volver
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: "35px", backgroundColor: "#060c2d" }}
          >
            Guardar
          </button>
        </div>
      </div>
      
        )
      }
      <Footer />
    </Fragment>
  );
};
export default InformationPrincipal;
