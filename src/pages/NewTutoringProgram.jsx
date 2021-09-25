import React, { Fragment, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AdminContext from "../context/AdminFunctions/adminContext";

const NewTutoringProgram = (props) => {
  
  const adminContext = useContext(AdminContext)
  const { addNewTutoringProgram } = adminContext;

  const [TutoringProgram, setTutoringProgram] = useState({
    title: "",
    initial_date: "",
    final_date: "",
    semester: "",
    condition: "",
  })

  const onSubmit = (e) => {
    e.preventDefault();
    addNewTutoringProgram(TutoringProgram);
  };

  useEffect(() => {
    console.log(TutoringProgram)
  },[TutoringProgram])

  return (
    <Fragment>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Abrir nuevo Programa de tutorias</h1>                
              </div>

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    {/* <a href="#">Home</a> */}
                    <Link to="Lista_de_citas">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Datos Programa de Tutorias </li>
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
                        <b>Datos del nuevo Programa de Tutorías</b>
                      </h5>
                      <div className="col-sm-12 ">
                        <form>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Título"
                              onChange={(e) => setTutoringProgram({ ...TutoringProgram, title: e.target.value })}
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
                              placeholder="Fecha Inicio (aa-mm-dd)"
                              onChange={(e) => setTutoringProgram({ ...TutoringProgram, initial_date: e.target.value })}
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
                              placeholder="Fecha Fin (aa-mm-dd)"
                              onChange={(e) => setTutoringProgram({ ...TutoringProgram, final_date: e.target.value })}
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
                              placeholder="Semestre"
                              onChange={(e) => setTutoringProgram({ ...TutoringProgram, semester: e.target.value })}
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
                              placeholder="Condicion (active)"
                              onChange={(e) => setTutoringProgram({ ...TutoringProgram, condition: e.target.value })}
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

export default NewTutoringProgram;
