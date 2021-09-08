import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AppointmentsContext from "../context/Appointments/AppointmentsContext";

const NewAppointment = () => {

  const appointmentsContext = useContext(AppointmentsContext);
  const { setAppointmentNew  } = appointmentsContext;
  
  useEffect(() => {

    setAppointmentNew();

  }, []);

  return (
    <Fragment>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Nueva Cita</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    {/* <a href="#">Home</a> */}
                    <Link to="Lista_de_citas">Lista de Citas</Link>
                  </li>
                  <li className="breadcrumb-item active">Cita Nueva </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="card-header text-muted border-bottom-0">
            {/* {`${dataStudent.name} ${dataStudent.f_lastname} ${dataStudent.m_lastname}`} */}
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
                      <div className="card-header">
                        <h3 className="card-title">DETALLES</h3>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-5">
                            {/* textarea */}
                            <div className="form-group ml-5 mt-3">
                              <div className="form-group">
                                <label>Fecha:</label>
                                <input type="date" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-3"></div>
                          <div className="col-sm-3">
                            <div className="form-group ml-5 mt-3">
                              <div className="form-group">
                                <label>Numero de cita:</label>
                                <input type="number" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <form>
                          <div className="row">
                            <div className="col-sm-11">
                              {/* textarea */}
                              <div className="form-group ml-5 mt-3">
                                <label>Descripción:</label>
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
                            <div className="col-sm-11">
                              {/* textarea */}
                              <div className="form-group ml-5 mt-2">
                                <label>Observaciones:</label>
                                <textarea
                                  className="form-control"
                                  rows={5}
                                  placeholder="Enter ..."
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          {/* /.card-body */}
                        </form>
                      </div>
                      <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                          Guardar
                        </button>
                        <button
                          type="submit"
                          className="btn btn-danger"
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

export default NewAppointment;
