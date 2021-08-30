import React, { useState } from "react";
import axios from "axios";


const Teacher = () => {
  const initialState = {
    cod_teacher: "",
    name: "",
    f_lastname: "",
    m_lastname: "",
    phone: "",
    email: "",
  };
  const [FormData, setFormData] = useState(initialState);
  const handleInputChange = (event) => {
    setFormData({
      ...FormData,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    postData();
  };
  const url = "https://tutoring-system-api.herokuapp.com/teachers";

  const postData = async () => {
    const res = await axios.post(url, FormData);
    console.log(res.data);
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Registro de Docentes</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">Registro de Docentes</li>
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  {/* <Link to="Detalle_Servicio"> Detalle Servicio</Link> */}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Datos Docente</h3>
            </div>
            {/* form start */}
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputFLastname1">Código</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFLastname1"
                    placeholder="Ingrese código"
                    name="cod_teacher"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Nombre(s)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Ingrese nombres"
                    name="name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputFLastname1">
                    Apellido Paterno
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFLastname1"
                    placeholder="Ingrese apellido paterno"
                    name="f_lastname"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputMLastname1">
                    Apellido Materno
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputMLastname1"
                    placeholder="Ingrese apellido materno"
                    name="m_lastname"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPhone1">Teléfono</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPhone1"
                    placeholder="Ingrese número de teléfono"
                    name="phone"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Ingrese correo electrónico"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => onSubmit(e)}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teacher;
