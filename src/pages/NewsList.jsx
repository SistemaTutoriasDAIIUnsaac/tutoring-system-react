import React, { Fragment, useContext, useEffect } from "react";
import News from "../components/News";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AuthContext from "../context/Authentication/authContext";
import AppointmentsContext from "../context/Appointments/AppointmentsContext";

function NewsList(props) {  

  const data = [
    {
      date: "30-08-2021",
      title: "Reunión con directora de escuela",
      person: "Nila Zonia Acurio Usca",
    },
    {
      date: "01-09-2021",
      title: "Cita con Tutorandos",
      person: "Coordinador de Tutoria",
    },
  ];

  const appointmentContext = useContext(AppointmentsContext);
  const { getNews, news } = appointmentContext;

  const authContext = useContext(AuthContext);
  const { authenticated, getUserData, setLastURL } = authContext;

  useEffect(() => {
    setLastURL();
    // getUserData();
    getNews();
  }, []);

  return (
    <Fragment>
      <Header />
      <SideBar />
      {news == null ? (
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Novedades</h1>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
        </div>
      ) : (
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Novedades</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item active">Novedades</li>
                    <li className="breadcrumb-item">
                      <Link to="Nueva_cita"> Últimas novedades</Link>
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
                    <button className="btn btn-primary col-3 mt-3 ml-4" style={{backgroundColor: "#060c2d"}} onClick={() => {props.history.push("/agregar_novedad")}}><h5>Agregar Novedad +</h5></button>
                    <div className="card-body">
                      <div className="card card-primary">
                        <div
                          className="card-header"
                          style={{ backgroundColor: "#eb9b44" }}
                        >
                          <h4
                            className="card-title"
                            style={{ color: "#060c2d" }}
                          >
                            <b>Últimas novedades</b>
                          </h4>
                        </div>

                        <div className="card-body">
                          <div
                            style={{
                              overflowY: "scroll",
                              height: "100%",
                              maxHeight: 525,
                              paddingRight: 30,
                              paddingLeft: 30,
                            }}
                          >
                            <div
                              className="card-header"
                              style={{ padding: 1 }}
                            />
                            {news.map((item, index) => (
                              <Link style={{ color: "black" }}>
                                <News data={item} />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Link to="list_student">
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
      )}
      <Footer />
    </Fragment>
  );
}

export default NewsList;
