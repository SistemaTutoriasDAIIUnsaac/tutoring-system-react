import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Header from "../components/Header";

function EditTeacherList() {
    const [DataProducts, setDataProducts] = useState([]);

    const columns = [

      { title: "Nombres", field: "name" },
  
      { title: "Apellidos", field: "surname" },
  
      { title: "Categoría", field: "category" },
  
    ];
  
    const queryAPI = async (method = "get", data = {}) => {
      const url = "https://tsc-rest-api.herokuapp.com/products";
      var ans = [];
      if (method == 'get') {
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
      <Fragment>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}  
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Lista de docentes</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Lista de docentes</li>
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
                      title="Seleccionar tutores"
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
                        selection: true,
                      }}
                      actions={[
                        {
                          icon: "delete",
                          tooltip: "Docente seleccionado",
                          onClick: (ev, rowData) =>
                            console.log("Docente seleccionado")
                        },
                        {
                          icon: "edit",
                          tooltip: "Docente no seleccionado",
                          onClick: (ev, rowData) =>
                            console.log("Docente no seleccionado")
                        },
                      ]}
                    />
                    <div class="row">
                      <div class="col-12">                        
                      <Link to="/lista_de_tutores">
                        <button type="submit" className="btn btn-danger ml-8 mt-3 float-right">
                          Volver
                        </button>
                      </Link>
                      <Link to="/lista_de_tutores">
                        <button type="submit" className="btn ml-8 mt-3" style={{ color: "white", backgroundColor: "#060c2d"}}>
                          Guardar
                        </button>
                      </Link>
                      </div>
                    </div>        
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
       <Footer />
       </Fragment>
    );  
}

export default EditTeacherList;
