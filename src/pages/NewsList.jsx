import React, { Fragment } from "react";
import News from "../components/News";
import { Link } from "react-router-dom";

const News_List = () => {
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
    {
      date: "15-09-2021",
      title: "Reunión Tutores",
      person: "Coordinador de Tutoria",
    },
  ];

  return (
    <Fragment>
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
                    {/* <a href="#">Home</a> */}
                    <Link to="Nueva_cita"> Últimas novedades</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <div className="card">
          <div className="card-body">
            <div className="card card-primary">
              <div className="card-header">
                <h4 className="card-title">Últimas novedades</h4>
              </div>

              <div className="card-body">
                <div
                  style={{
                    overflowY: "scroll",
                    height: 300,
                    paddingRight: 30,
                    paddingLeft: 30,
                  }}
                >
                  <div className="card-header" style={{ padding: 1 }} />
                  {data.map((item, index) => (
                    <News data={item} />
                  ))}
                </div>
              </div>
            </div>
            <Link to="list_student">
              <button type="button" className="btn btn-danger float-right">
                <i className="" /> Volver
              </button>
            </Link>
          </div>
        </div>
      </div>
      );
    </Fragment>
  );
};
export default News_List;
