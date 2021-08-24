import React, { Fragment, useState } from "react";
import axios from "axios";

const Prueba = () => {
  const[datos,setDatos]=useState({
    cod_student:'',
    name: '',
    f_lastname: '',
    m_lastname: '',
    phone:'',
    email:'',
    cod_faculty:'',
    cod_career:'',
    adress:''
  })  
  const Data1 ={
    nro_orden: '1',
    cod_student:'161234',
    name: 'Miguel',
    f_lastname: 'Shaw',
    m_lastname: 'Trauco',
    estado:'Completado',
  }
  const Data2 ={
    nro_orden: '2',
    cod_student:'165678',
    name: 'Paolo',
    f_lastname: 'Kane',
    m_lastname: 'Guerrero',
    nro_citas:'2',
    estado:'Completado',
  }  
  const Data3 ={
    nro_orden: '3',
    cod_student:'171234',
    name: 'Cristian',
    f_lastname: 'Palenca',
    m_lastname: 'Cueva',
    estado:'Indispuesto',
  }
  const Data4 ={
    nro_orden: '4',
    cod_student:'175678',
    name: 'André',
    f_lastname: 'Sterling',
    m_lastname: 'Carrillo',
    estado:'Completado',
  }    
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
        [event.target.name]:event.target.value
    })
    console.log(datos)
}

const EnviarDatos = (event) =>{
    event.preventDefault();
    console.log(datos.nombre+' '+datos.apellido)
}  
  return (
    <Fragment>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Lista de Tutorados</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">                  
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
                        <th style={{ width: 80 }}>Estado</th>
                        <th style={{ width: 40 }}>Información</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{Data1.nro_orden+ "."}</td>
                        <td>{Data1.cod_student}</td>
                        <td>{Data1.name+" "+Data1.f_lastname+" "+Data1.m_lastname}</td>
                        <td>{Data1.estado}</td>
                        <td>
                        <button size="small" type="submit" className="btn btn-info" onClick={(e) => onSubmit(e)}>
                          _Ver_                
                        </button>
                        </td>
                      </tr>
                      <tr>
                        <td>{Data2.nro_orden+ "."}</td>
                        <td>{Data2.cod_student}</td>
                        <td>{Data2.name+" "+Data2.f_lastname+" "+Data2.m_lastname}</td>
                        <td>{Data2.estado}</td>
                        <td>
                        <button size="small" type="submit" className="btn btn-info" onClick={(e) => onSubmit(e)}>
                            _Ver_
                        </button>                          
                        </td>
                      </tr>
                      <tr>
                        <td>{Data3.nro_orden+ "."}</td>
                        <td>{Data3.cod_student}</td>
                        <td>{Data3.name+" "+Data3.f_lastname+" "+Data3.m_lastname}</td>
                        <td>{Data3.estado}</td>
                        <td>
                        <button size="small" type="submit" className="btn btn-info" onClick={(e) => onSubmit(e)}>
                            _Ver_
                        </button>                          
                        </td>
                      </tr>
                      <tr>
                        <td>{Data4.nro_orden+ "."}</td>
                        <td>{Data4.cod_student}</td>
                        <td>{Data4.name+" "+Data4.f_lastname+" "+Data4.m_lastname}</td>
                        <td>{Data4.estado}</td>
                        <td>
                        <button size="small" type="submit" className="btn btn-info" onClick={(e) => onSubmit(e)}>
                            _Ver_
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
