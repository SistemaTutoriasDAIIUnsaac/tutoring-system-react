import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { MuiThemeProvider,createMuiTheme,FormControlLabel,Switch} from "@material-ui/core";
import { Link } from "react-router-dom";

function ListStudent() {
  //Button of mode and module dark (table)
  const[preferDark,setPreferDark]=useState(()=>{
    const mode=localStorage.getItem("_tableDarkMode")
    return mode==="true"||false
  }) 
  const theme=createMuiTheme({
    palette:{
      type:preferDark?"dark":"light"
    }
  })
  const handelDarkModeChange=()=>{
    setPreferDark(!preferDark)
    localStorage.setItem("_tableDarkMode",!preferDark)
  }
  //Finish Button and module of mode dark (table)  
  const [DataProducts, setDataProducts] = useState([]);
  const columns = [
    { title: "Nro", field: "no_service" },

    { title: "Código", field: "code" },

    { title: "Nombres y Apellidos", field: "full_name" },

    { title: "Número de Citas", field: "nro_citas" },
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
                      Generar Cita <i className="fas fa-plus"></i>
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
              <h1>Citas</h1>
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
                {/*Start button of mode dark*/}
                <FormControlLabel
                  value="top"
                  control={<Switch color="primary" checked={preferDark}/>}
                  onChange={handelDarkModeChange}
                  label="Modo Oscuro"
                  labelPlacement="right"
                />
                {/*Finish button of mode dark*/}                        
                {/*Start mode dark or light*/}
                <MuiThemeProvider theme={theme}>
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
                {/*Finish mode dark or light*/}
                </MuiThemeProvider>
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

export default ListStudent;
