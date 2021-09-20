import React, { useState, useContext, useEffect } from "react";
import NavItem from "./NavItem";
import AuthContext from '../context/Authentication/authContext'


function SideBar() {
  
  const authContext = useContext(AuthContext);
  const { navbarList, user, authenticated } = authContext;
  // const { username, role } = user;

  const [UserData, setUserData] = useState({
    name: "",
    lastname: "",
    role: "",
    img: "../../dist/img/user4-128x128.jpg",
  })

  useEffect( () => {
    if(authenticated && user) {
      setUserData({
        name: user.username,
        role: user.role,
        img: "../../dist/img/user4-128x128.jpg",
      })
    }
    setDataMenu(navbarList)
  }, [user, authenticated, navbarList])

  const [DataMenu, setDataMenu] = useState(navbarList);

  const ChangeState = (_name) => {
    let newDataMenu = [...navbarList];

    newDataMenu.map((item) => {
      if (item.name == _name) {
        item._state = !item._state;
      }
    });
    setDataMenu(newDataMenu);
    // console.log(DataMenu);
  };

  const identifyRole = (role) => {
    switch (role) {
      case "student":
        return "Estudiante";
      case "coordinator":
        return "Coordinador General";
      case "tutor":
        return "Docente Tutor";
      case "principal":
        return "Director de Escuela";
      default:
        return "";
    }
  }

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor: "#060c2d" }}>
      {/* Brand Logo */}
      <a href="#" className="brand-link" style={{backgroundColor: "#eb9b44"}}>
        
        <img
          src="/UNSAACW.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: "1" }}
        />
        <span className="brand-text "style={{color:"#060c2d"}}><b>Sistema de Tutorias</b></span> <br/>
        <span className="brand-text" style={{marginLeft: 85, color:"#060c2d"}}><b>UNSAAC</b></span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={UserData.img}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              {UserData.name} {UserData.lastname}
              <br/>
              {identifyRole(UserData.role)}
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}

        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            { 
              navbarList.map(nav_item => (
                <NavItem data={nav_item} key={nav_item.name}/>
              ))            
            }
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default SideBar;