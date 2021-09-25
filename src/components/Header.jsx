import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/Authentication/authContext";

function Header(props) {

  const authContext = useContext(AuthContext)
  const { navbarList, user, authenticated, logOut } = authContext;
  
  
  const [UserData, setUserData] = useState({
    name: "",
    lastname: "",
    role: "",
    img: "/../../dist/img/user5-128x128.jpg",
  })

  useEffect( () => {
    if(authenticated && user) {
      setUserData({
        name: `${user.name}`,
        lastname: `${user.f_lastname} ${user.m_lastname}`,
        role: user.role,
        img: "../../dist/img/user8-128x128.jpg",
      })
    }
  }, [user, authenticated, navbarList])


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
              <b>{`${UserData.name} ${UserData.lastname}`}</b>
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
