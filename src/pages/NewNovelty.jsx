import React, { Fragment, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import AdminContext from "../context/AdminFunctions/adminContext";

const NewNovelty = (props) => {

  const adminContext = useContext(AdminContext)
  const { addNovelty } = adminContext;

  const [Novelty, setNovelty] = useState({
    title: "",
    description: "",
    whom: "",
    date_time: "",
  });  
  // tutors_list/teacher_list_principal
  const fixedData = (e) => {
    e.preventDefault();
    const { title, description, whom, date_time } = Novelty;
    if (title === "" || description === "" || whom === "" || date_time === "") {
      alert("Por favor, llene todos los campos");
    }
    else{
      var fxd_date = Novelty.date_time;
      fxd_date = fxd_date.substring(2,fxd_date.length);
      setNovelty({...Novelty, date_time: fxd_date})
      addNovelty(Novelty);
      props.history.push("/novedades");
    }
  }

  const dataStudent = {
    cod_student: "160890",
    name: "Marko",
    f_lastname: "Castro",
    m_lastname: "Cordova",
    phone: "983048685",
    email: "160890@unsaac.edu.pe",
    cod_faculty: "#IEEMI",
    cod_career: "#IIS",
    adress: "Calle Domingo Guevara",
  };

  useEffect(() => {
    console.log(Novelty)
  },[Novelty])

  return (
    <Fragment>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Nueva Novedad</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    {/* <a href="#">Home</a> */}
                    <Link to="/">Lista de Novedades</Link>
                  </li>
                  <li className="breadcrumb-item active">Nueva Novedad </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className=" card card-primary">
                      <div
                        className="card-header"
                        style={{ backgroundColor: "#060c2d" }}
                      ></div>

                      <div className="card-body">
                        <div className="row">
                        <div className="col-sm-5">
                            {/* textarea */}
                            <div className="form-group ml-5 mt-3">
                              <div className="form-group">
                                <label>Fecha:</label>
                                <input type="date" className="form-control" onChange={ e => { setNovelty({ ...Novelty, date_time: e.target.value }) } } />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-3"></div>
                          <div className="col-sm-3"></div>
                        </div>
                        <form>
                          <div className="row">
                            <div
                              className="form-group "
                              style={{ marginLeft: 55, width: "85%" }}
                            >
                              <label htmlFor="exampleInputPassword1">
                                Titulo
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese título"
                                name="Titulo"
                                onChange={e => { setNovelty({ ...Novelty, title: e.target.value }) }}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-11">
                              {/* texDescripcion */}
                              <div className="form-group ml-5 mt-3">
                                <label>Descripción</label>
                                <textarea
                                  className="form-control"
                                  rows={5}
                                  placeholder="Enter ..."
                                  onChange={e => { setNovelty({ ...Novelty, description: e.target.value }) }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div
                              className="form-group "
                              style={{ marginLeft: 55, width: "85%" }}
                            >
                              <label htmlFor="exampleInputPassword1">
                                Para
                              </label>
                              <input
                                type=""
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Código de Estudiante"
                                onChange={e => { setNovelty({ ...Novelty, whom: e.target.value }) }}
                              />
                            </div>
                          </div>
                          {/* /.card-body */}
                        </form>
                      </div>
                      <div className="card-footer">
                        {/* <Link to=""> */}
                          <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ backgroundColor: "#060c2d" }}
                            onClick={(e) => fixedData(e)}
                          >
                            Guardar
                          </button>
                        {/* </Link> */}
                        <Link to="/">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            style={{ float: "right" }}
                          >
                            Cancelar
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default NewNovelty;
