import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";


function EditHelperStudentList() {
  const [DataProducts, setDataProducts] = useState([]);

  const columns = [
    { title: "Código", field: "cod_student" },

    { title: "Apellidos y nombres", field: "full_name" },

    { title: "Estado académico", field: "academic_status" },

    { title: "Cantidad como ayudante", field: "amount_like_helper" },
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
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Lista de estudiantes ayudantes</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">
                  Lista de estudiantes ayudantes
                </li>
                <li className="breadcrumb-item">
                  {/* <a href="#">Home</a> */}
                  <Link to="/"> Home</Link>
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
                    title="Seleccionar estudiantes ayudantes"
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
                        tooltip: "Docente seleccionado",
                        onClick: (ev, rowData) =>
                          console.log("Docente seleccionado"),
                      },
                      {
                        icon: "edit",
                        tooltip: "Docente no seleccionado",
                        onClick: (ev, rowData) =>
                          console.log("Docente no seleccionado"),
                      },
                    ]}
                  />
                  <Link to="/">
                    <button type="submit" className="btn btn-danger ml-8 mt-3">
                      Volver
                    </button>
                  </Link>
                  <Link to="/">
                    <button type="submit" className="btn btn-warning ml-8 mt-3">
                      Limpiar
                    </button>
                  </Link>
                  <Link to="/">
                    <button type="submit" className="btn btn-primary ml-8 mt-3">
                      Guardar
                    </button>
                  </Link>
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

export default EditHelperStudentList;
