import React,{Fragment,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function NewCoordinator() {
    const[datos,setDatos]=useState({
      cod_coordinator:'',
      name: '',
      f_lastname: '',
      m_lastname: '',
      phone:'',
      email:''
    })
    const onSubmit = (e) => {
        e.preventDefault();
        postData()
    }
    const url = "https://tutoring-system-api.herokuapp.com/coordinator"
    const postData = async() => {
        const res = await axios.post(url, datos)
        console.log(res.data)
    }
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
              <h1>Registrar Nuevo Coordinador</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  <Link to="/"> Home</Link>
                </li>
                <li className="breadcrumb-item active">Nuevo Coordinador</li>
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
            <div className="card-header">
              <h3 className="card-title">Datos de coordinador</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form>
              <div className="card-body" onSubmit={EnviarDatos}>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">C??digo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="C??digo de coordinador"
                    name='cod_coordinator'
                    onChange={CambiarEntrada}
                  />
                </div>
                <div className="form-group">                    
                  <label htmlFor="exampleInputEmail1">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Nombres"
                    name='name'
                    onChange={CambiarEntrada}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Apellido Paterno</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Primer Apellido"
                    name='f_lastname'
                    onChange={CambiarEntrada}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Apellido Materno</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Segundo Apellido"
                    name='m_lastname'
                    onChange={CambiarEntrada}
                  />
                </div>                
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Tel??fono</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="N??mero de tel??fono"
                    name='phone'
                    onChange={CambiarEntrada}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Correo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="e-mail"
                    name='email'
                    onChange={CambiarEntrada}
                  />
                </div>
              </div>
              {/* /.card-body */}              
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={(e) => onSubmit(e)}>
                  Guardar
                </button>
              </div>
            </form>            
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
    </Fragment>
  );
}
export default NewCoordinator;
