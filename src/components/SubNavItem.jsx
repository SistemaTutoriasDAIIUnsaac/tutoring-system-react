import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'

function SubNavItem({data}) {
  const { name, icon, _state} = data;
  var rt = "/" + name;
  rt = rt.split(" ").join("_");
  return (    
    <li className="nav-item" >
      <Link to={rt} className={_state ? "nav-link active" : "nav-link" }>
        {/* <a className={_state ? "nav-link active" : "nav-link" }> */}
          <i className={icon}></i>
          <p>{name}</p>          
        {/* </a> */}
      </Link>    
      </li>
  );
}

export default SubNavItem;
