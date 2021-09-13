import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{height:87}}>
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="pushmenu"
            href="!#"
            role="button"
          >
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/Novedades" className="nav-link">
            Novedades
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/perfil" className="nav-link">
            Perfil
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="fullscreen"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </Link>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Navbar Search */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="navbar-search"
            href="!#"
            role="button"
          >
            <i className="fas fa-user" style={{ marginRight: 10 }} />
            Waldo Elio Ibarra Zambrano
          </a>
        </li>
        <li>
          {/* <div className="float-rigth navbar-search-block"> */}
            <form className="form-inline">
              <Link className="nav-link">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </Link>
              <Link className="nav-link">
                Cerrar Sesion <i className="fas fa-sign-out-alt" />
              </Link>
            </form>
          {/* </div> */}
        </li>
        {/* Notifications Dropdown Menu */}
        
      </ul>
    </nav>
  );
}

export default Header;
