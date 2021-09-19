import React, { Fragment, useContext } from "react";
import SubNavItem from "./SubNavItem";
import { Link } from "react-router-dom";
import AuthContext from "../context/Authentication/authContext";

function NavItem({data}) {

  const { name, icon, _state} = data;  
  
  var route = "/" + name.toLowerCase();
  route = route.split(" ").join("_");

  var st = _state ? "active" : ""

  const authContext = useContext(AuthContext)
  const { navbarList, selectNavItem } = authContext;

  return (
    <Fragment>
          <li class="nav-item">
      <Link to={route} className={`nav-link ${st}`} >
            {/* <a href="widgets.html" class="nav-link active"> */}
              <i class="nav-icon fas fa-th"></i>
              <p>
                {name}
                <span class="right badge badge-danger">{}</span>
              </p>
            {/* </a> */}
      </Link>
          </li>
    </Fragment>
  );
}

export default NavItem;
