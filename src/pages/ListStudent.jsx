import React, { Fragment, useState } from "react";
import axios from "axios";
const Prueba = () => {
  const [datos, setDatos] = useState({
    cod_student: "",
    name: "",
  });
  const onSubmit = (e) => {
    //e.preventDefault();
    //postData();
  };
  const url = "https://tutoring-system-api.herokuapp.com/students";
  const postData = async () => {
    const res = await axios.post(url, datos);
    console.log(res.data);
  };
  const CambiarEntrada = (event) => {
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    console.log(datos);
  };

  const EnviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + " " + datos.apellido);
  };
  return (
    <Fragment>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Citas</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Nueva Cita</li>
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
            <div className="card card-primary">
              {/* /.card-header */}
              {/* form start */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Tutorados</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th style={{ width: 10 }}>#</th>
                        <th style={{ width: 100 }}>Código</th> 
                        <th>Nombres y Apellidos</th>
                        <th style={{ width: 80 }}>Número de Citas</th>
                        <th style={{ width: 40 }}>Acciones</th>                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>161111</td>
                        <td>Miguel Shaw Trauco</td>
                        <td>7</td>
                        <td>
                        <button size="small" type="submit" className="btn btn-info" onClick={(e) => onSubmit(e)}>
                            _ Ir _
                        </button>                          
                        </td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>162222</td>
                        <td>Carlos Umtiti Zambrano</td>
                        <td>3</td>
                        <td>
                        <button type="submit" className="btn btn-info" onClick={(e) => onSubmit(e)}>
                            _ Ir _
                        </button>                          
                        </td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>171122</td>
                        <td>Cristian Pique Ramos</td>
                        <td>5</td>
                        <td>
                        <button type="submit" className="btn btn-info" onClick={(e) => onSubmit(e)}>
                            _ Ir _
                        </button>                          
                        </td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>172222</td>
                        <td>Pedro Navas Gallese</td>
                        <td>2</td>
                        <td>
                        <button type="submit" className="btn btn-info" onClick={(e) => onSubmit(e)}>
                            _ Ir _
                        </button>                          
                        </td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>173333</td>
                        <td>Cristian Palenca Cueva </td>
                        <td>3</td>
                        <td>
                        <button type="submit" className="btn btn-info" onClick={(e) => onSubmit(e)}>
                            _ Ir _
                        </button>                          
                        </td>
                      </tr>                                                                  
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
                <div className="card-footer clearfix">
                  <ul className="pagination pagination-sm m-0 float-right">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        «
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        »
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </Fragment>
  );
};
export default Prueba;
