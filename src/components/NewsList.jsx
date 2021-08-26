import React, { Fragment } from "react";
import News from "./News";

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
                <h1>NOVEDADES</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active"></li>
                  <li className="breadcrumb-item">
                    {/* <a href="#">Home</a> */}
                    {/* <Link to="Detalle_Servicio"> Detalle Servicio</Link> */}
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
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h3 className="card-title">Últimas Novedades</h3>
                <div className="card-tools">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Buscar"
                    />
                    <div className="input-group-append">
                      <div className="btn btn-primary">
                        <i className="fas fa-search" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-tools */}
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <div className="mailbox-controls">
                  {/* Check all button */}
                  <button
                    type="button"
                    className="btn btn-default btn-sm checkbox-toggle"
                  >
                    <i className="far fa-square" />
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="far fa-trash-alt" />
                    </button>
                  </div>
                  {/* /.btn-group */}
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-sync-alt" />
                  </button>
                  {/* /.btn-group */}
                  {/* /.float-right */}
                </div>
                <div className="table-responsive mailbox-messages">
                  <table className="table table-hover table-striped">
                    <thead>
                      <td style={{ width: "10%" }}></td>
                      <td style={{ width: "30%" }}></td>
                      <td style={{ width: "30%" }}></td>
                      <td style={{ width: "30%" }}></td>
                    </thead>
                    {data.map((item, index) => (
                      <News data={item} />
                    ))}
                  </table>
                  {/* /.table */}
                </div>
                {/* /.mail-box-messages */}
              </div>
              {/* /.card-body */}
              <div className="card-footer p-0">
                <div className="mailbox-controls">
                  {/* Check all button */}
                  <button
                    type="button"
                    className="btn btn-default btn-sm checkbox-toggle"
                  >
                    <i className="far fa-square" />
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="far fa-trash-alt" />
                    </button>
                  </div>
                  {/* /.btn-group */}
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-sync-alt" />
                  </button>
                  {/* /.float-right */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
    </Fragment>
  );
};
export default News_List;
