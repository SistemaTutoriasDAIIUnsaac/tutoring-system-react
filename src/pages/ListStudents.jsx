import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";

function ListStudents() {
  const [DataProducts, setDataProducts] = useState([]);

  const columns = [
    { title: "Nro Servicio", field: "no_service" },

    { title: "DNI", field: "dni" },

    { title: "Nombres y Apellidos", field: "full_name" },

    { title: "Fecha", field: "date" },

    { title: "Modelo", field: "model" },

    { title: "Marca", field: "brand" },

    { title: "Aplicacion", field: "aplication" },
  ];

  const queryAPI = async (method = "get", data = {}) => {
    const url = "https://tsc-rest-api.herokuapp.com/products";
    var ans = [];
    if (method == "get") {
      ans = await axios.get(url);
      setDataProducts(ans.data);
    } else if (method == "delete") {
      // console.log(data);
      ans = await axios.delete(
        "https://tsc-rest-api.herokuapp.com/product/" + data.id
      );
      // console.log(ans);
      setDataProducts(DataProducts.filter((item) => item.id != data.id));
    }
  };

  const filterOptions = (inputValue, _data) => {
    return _data.filter((i) =>
      i.label.toUpperCase().includes(inputValue.toUpperCase())
    );
  };

  useEffect(() => {
    queryAPI("get");
  }, [setDataProducts]);

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content">
        <div className="conteiner-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card mt-4">
                <div className="card-body">
                <Link to="Nuevo_Estudiante">
                  <button className="btn btn-primary">
                    <h4>
                      Agregar Nuevo Estudiante <i className="fas fa-plus"></i>
                    </h4>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Registrar Nuevo Estudiante</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">Lista de Estudiantes</li>
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  <Link to="Nuevo_Estudiante"> Nuevo Estudiante</Link>
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
          <div className="row">
            <div className="col-12">
              <div className="card">
                {/* /.card-header */}
                <div className="card-body">
                  <MaterialTable
                    title="Lista de Servicios"
                    data={DataProducts}
                    columns={columns}
                    options={{
                      search: true,
                      paging: true,
                      filtering: true,
                      exportButton: true,
                      actions: true,
                      actionsColumnIndex: -1,
                      pageSize: 10,
                    }}
                    actions={[
                      {
                        icon: "delete",
                        tooltip: "Borrar Estudiante",
                        onClick: (ev, rowData) =>
                          console.log("Borrar Estudiante")
                      },
                      {
                        icon: "edit",
                        tooltip: "Editar Estudiante",
                        onClick: (ev, rowData) =>
                          console.log("Editar Estudiante")
                      },
                    ]}
                  />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
}

export default ListStudents;
