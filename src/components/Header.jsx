import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/Authentication/authContext";

function Header(props) {

  const authContext = useContext(AuthContext)
  const { logOut } = authContext;

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{height:87}} >
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            style={{color:"#eb9b44"}}
            data-widget="pushmenu"
            href="!#"
            role="button"
          >
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block" >
          <Link to="/Novedades" className="nav-link">
            <b>Novedades</b>
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/perfil" className="nav-link">
          <b>Perfil</b>
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
            <b>Waldo Elio Ibarra Zambrano</b>
          </a>
        </li>
        <li>
          {/* <div className="float-rigth navbar-search-block"> */}
            <form className="form-inline">
              <Link className="nav-link">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge" >15</span>
              </Link>
              <Link className="nav-link" onClick={ () => {
                logOut()
                // props.history.push('/login')
                }}>
                <b>Cerrar Sesión</b> <i className="fas fa-sign-out-alt" style={{color:"#eb9b44"}} />
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
