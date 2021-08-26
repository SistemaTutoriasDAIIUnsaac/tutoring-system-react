import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";

function Talleres() {

  //Finish Button and module of mode dark (table)  
  const [DataProducts, setDataProducts] = useState([]);
  const columns = [
    { title: "Nro", field: "no_service" },

    { title: "Código", field: "code" },
    {title: "Taller", field:"taller"},

    { title: "Estudiante Ayudante", field: "full_name" },
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
              <h1>Talleres</h1>
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
                {/*Start button of mode dark*/}              
                <div className="card-body">
                  <MaterialTable
                    title="Lista de Estudiantes"
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
                  <Link to="/">
                    <button type="submit" className="btn btn-danger ml-8 mt-3">
                      Volver
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

export default Talleres;
