import React, { Fragment, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AppointmentsContext from "../context/Appointments/AppointmentsContext";

const NewAppointment = (props) => {

  const appointmentsContext = useContext(AppointmentsContext);
  const { postAppointmentNew, studentSelected } = appointmentsContext;
  
  const [AppointmentData, setAppointmentData] = useState({
    date_time: "",
    general_description: "",
    private_description: "",
    diagnosis: "SN"
  })


  const fixedData = () => {
    var fxd_date = AppointmentData.date_time;
    fxd_date = fxd_date.substring(2,fxd_date.length);
    setAppointmentData({...AppointmentData, date_time: fxd_date})
    postAppointmentNew(studentSelected.cod_student, AppointmentData);
  }

  useEffect(() => {
    console.log(AppointmentData)    

  }, [AppointmentData]);

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
          <div className="card">
            <div className="card-body">
              <div className="row">
                {studentSelected != null ? (
                  <h4>
                    Tutorado:{" "}
                    {` ${studentSelected.name} ${studentSelected.f_lastname} ${studentSelected.m_lastname}`}
                  </h4>
                ) : (
                  <h4>Tutorado:{`No se tiene datos del estudiante`}</h4>
                )}
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
                                <input type="date" className="form-control" onChange={(e) => setAppointmentData({...AppointmentData, date_time: e.target.value }) } />
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
                                  onChange={(e) => setAppointmentData({...AppointmentData, general_description: e.target.value }) }
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-sm-11">
                              {/* textarea */}
                              <div className="form-group ml-5 mt-2">
                                <label>Informacion Privada:</label>
                                <textarea
                                  className="form-control"
                                  rows={5}
                                  placeholder="Enter ..."
                                  onChange={(e) => setAppointmentData({...AppointmentData, private_description: e.target.value }) }
                                />
                              </div>
                            </div>
                          </div>
                          {/* /.card-body */}
                        </form>
                      </div>
                      <div className="card-footer">
                        <button type="submit" className="btn btn-primary" onClick={ (e) => {
                          e.preventDefault();
                          fixedData();
                          // e.target.reset();
                          props.history.push(`/Lista_de_citas/${studentSelected.cod_student}`);
                        }}>
                          Guardar
                        </button>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          style={{ float: "right" }}
                          onClick={(e) => {
                            e.preventDefault();
                            props.history.push(`/Lista_de_citas/${studentSelected.cod_student}`)
                          }}
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
