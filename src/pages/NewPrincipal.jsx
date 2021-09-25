import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AdminContext from "../context/AdminFunctions/adminContext";

const NewPrincipal = (props) => {
  
  const adminContext = useContext(AdminContext);
  const { addNewPrincipal } = adminContext;

  const [PrincipalData, setPrincipalData] = useState({
    cod_teacher: "",
    name: "",
    f_lastname: "",
    m_lastname: "",
    phone: "",
    email: "",
    filiation: "",
    category: ""
  })

  const onSubmit = (e) => {
    e.preventDefault();
    addNewPrincipal(PrincipalData)
  };

  return (
    <Fragment>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Registrar Director(a) de Escuela</h1>                
              </div>

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    {/* <a href="#">Home</a> */}
                    <Link to="Lista_de_citas">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Datos director </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="card card-widget ">
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-12 border-right">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="ml-2 mt-2 mb-3">
                        <b>Datos del nuevo Coordinador</b>
                      </h5>
                      <div className="col-sm-12 ">
                        <form>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Cod Docente, recomendacion TE-001"
                              onChange={(e) => setPrincipalData({ ...PrincipalData, cod_teacher: e.target.value })}
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
                              placeholder="Nombres"
                              onChange={(e) => setPrincipalData({ ...PrincipalData, name: e.target.value })}
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
                              onChange={(e) => setPrincipalData({ ...PrincipalData, f_lastname: e.target.value })}
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
                              onChange={(e) => setPrincipalData({ ...PrincipalData, m_lastname: e.target.value })}
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
                              onChange={(e) => setPrincipalData({ ...PrincipalData, phone: e.target.value })}
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
                              onChange={(e) => setPrincipalData({ ...PrincipalData, email: e.target.value })}
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-user" />
                              </div>
                            </div>
                          </div>
                          <div className="input-group mb-3" onChange={(e) => setPrincipalData({...PrincipalData, filiation: e.target.value})}>
                            <select className="form-control" name="" id="">
                              <option value="Contratado"> Contratado</option>
                              <option value="Nombrado"> Nombrado</option>
                            </select>                            
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
                              placeholder="Categoria"
                              onChange={(e) => setPrincipalData({ ...PrincipalData, category: e.target.value })}
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
                            props.history.push("/novedades")
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

export default NewPrincipal;
