import React, { useState, useContext } from "react";
import NavItem from "./NavItem";
import AuthContext from '../context/Authentication/authContext'


function SideBar() {
  
  const authContext = useContext(AuthContext);
  const { navbarList, user } = authContext;
  // const { username, role } = user;

  const [UserData, setUserData] = useState({
    name: "username",
    lastname: "",
    role: "role",
    img: "../../dist/img/user4-128x128.jpg",
  })

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

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="#" className="brand-link">
        
        <img
          src="/unsaacw.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Sistema de Tutorias</span> <br/>
        <span className="brand-text font-weight-light" style={{marginLeft: 85}}>UNSAAC</span>
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
              {UserData.role == 'principal' ? 'Director de Escuela' : ''}
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
              DataMenu.map(nav_item => (
                <NavItem data={nav_item} ChangeState={ChangeState} key={nav_item.name}/>
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