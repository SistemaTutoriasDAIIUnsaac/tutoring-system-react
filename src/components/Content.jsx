import React from 'react'
import { Link } from 'react-router-dom'
const Content = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1> Sistema de Tutorias (pagina de prueba)</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">
                  <Link
                    to="/Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/Lista_de_Estudiantes">Lista de Estudiantes</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>

      <section className="content">
        <div className="container-fluid">
          
        </div>
      </section>
    </div>
  )
}

export default Content
