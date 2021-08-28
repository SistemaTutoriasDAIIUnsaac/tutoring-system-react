import React, { useState } from "react";
import NavItem from "./NavItem";


export default function SideBar() {
  const initialState = [
    // Estudiantes
    {
      name: "Estudiantes",
      icon: "nav-icon fas fa-boxes",
      _state: false,
      SubItems: [
        {
          name: "Lista de Estudiantes",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
        {
          name: "Nuevo Estudiante",
          icon: "fas fa-box-open nav-icon",
          _state: false,
        }        
      ],
    },
    // Docentes
    {
      name: "Docentes",
      icon: "nav-icon fas fa-wrench",
      _state: false,
      SubItems: [
        {
          name: "Lista de Tutorados",
          icon: "fas fa-newspaper nav-icon",
          _state: false,
        },
        {
          name: "Lista de Talleres",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
        {
          name: "Asistencias Talleres",
          icon: "fas fa-tools nav-icon",
          _state: false,
        },
        {
          name: "Lista de citas",
          icon: "fas fa-clock nav-icon",
          _state: false,
        },
        {
          name: "Lista de estudiantes",
          icon: "fas fa-clock nav-icon",
          _state: false,
        } 
      ],
    },
    // Talleres
    {
      name: "Talleres",
      icon: "nav-icon fas fa-book",
      _state: false,
      SubItems: [
        {
          name: "Lista de Talleres",
          icon: "fas fa-newspaper nav-icon",
          _state: false,
        }        
      ],
    },
    // Citas
    {
      name: "Citas",
      icon: "nav-icon fas fa-book",
      _state: false,
      SubItems: [
        {
          name: "Lista de estudiantes",
          icon: "fas fa-newspaper nav-icon",
          _state: false,
        } 
      ],
    }
  ]
  
  const [DataMenu, setDataMenu] = useState(initialState);

  const ChangeState = (_name) => {
    let newDataMenu = [...initialState];

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
          src="/favicon.ico"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Turbos Admin</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="/logo192.png"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Zonia Acurio
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
