import React, { Fragment, useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AdminContext from "../context/AdminFunctions/adminContext";

const UploadDataCoordinator = (props) => {

  const adminContext = useContext(AdminContext);
  const { updateCoordinatorCredentials, adminMessage } = adminContext;

  const [NewData, setNewData] = useState({    
    name: "",
    f_lastname: "",
    m_lastname: "",
    phone: "",
    email: "",
    before_username: "",
    new_username: "",
    new_password: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    updateCoordinatorCredentials(NewData);
  };  

  useEffect(() => {
    // if (adminMessage) {
    //   alert(adminMessage);
    // }
    console.log(NewData)
  },[adminMessage, NewData])

  return (
    <Fragment>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Actualizar datos Coordinador</h1>                
              </div>

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    {/* <a href="#">Home</a> */}
                    <Link to="Lista_de_citas">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Datos coordinador </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="card card-widget ">
            <div className="card-footer">
              <p>Ayuda: Debe llenar este formulario con los datos del nuevo coordinador, uilizando las credenciales del 
                anterior coordinador. Luego de guardar los cambios el anterior dejara de tener acceso al sistema.
              </p>
              <div className="row">
                <div className="col-sm-6 border-right">
                  <div className="card ">
                    <h5 className="ml-3 mt-2">
                      <b>Credenciales Actuales </b> .
                    </h5>
                    <div className="col-sm-12 ">
                      <form>
                        <div className="input-group mb-3">
                          <input
                            type="Correo"
                            className="form-control"
                            placeholder="Nombre de usuario o correo actual"
                            onChange={(e) => setNewData({...NewData, before_username: e.target.value}) }
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-envelope" />
                            </div>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña actual"
                            onChange={(e) => setNewData({...NewData, before_password: e.target.value}) }
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-lock" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card ">
                    <h5 className="ml-3 mt-2">
                      <b>Credenciales Nuevas</b>
                    </h5>
                    <div className="col-sm-12 ">
                      <form>
                        <div className="input-group mb-3">
                          <input
                            type="Correo"
                            className="form-control"
                            placeholder="Nuevo nombre de usuario o correo"
                            onChange={(e) => setNewData({...NewData, new_username: e.target.value}) }
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-envelope" />
                            </div>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña Nueva"
                            onChange={(e) => setNewData({...NewData, new_password: e.target.value}) }
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-lock" />
                            </div>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Repita la contraseña"
                            onChange={(e) => setNewData({...NewData, new_password: e.target.value}) }
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-lock" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 border-right">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="ml-3 mt-2">
                        <b>Datos del nuevo Coordinador</b>
                      </h5>
                      <div className="col-sm-12 ">
                        <form>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nombres"
                              onChange={(e) => setNewData({...NewData, name: e.target.value}) }
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-user" />
                              </div>
                            </div>
                          </div>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Apellido Paterno"
                              onChange={(e) => setNewData({...NewData, f_lastname: e.target.value}) }
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-user" />
                              </div>
                            </div>
                          </div>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Apellido Materno"
                              onChange={(e) => setNewData({...NewData, m_lastname: e.target.value}) }
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-user" />
                              </div>
                            </div>
                          </div>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Telefono"
                              onChange={(e) => setNewData({...NewData, phone: e.target.value}) }
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-user" />
                              </div>
                            </div>
                          </div>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Correo"
                              onChange={(e) => setNewData({...NewData, email: e.target.value}) }
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-user" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => onSubmit(e)}
                        >
                          Guardar cambios
                        </button>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            props.history.push("/novedades");
                          }}
                          style={{ float: "right" }}
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
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

export default UploadDataCoordinator;
