import React, { Fragment } from "react";
import SubNavItem from "./SubNavItem";


function NavItem({data, ChangeState}) {

  const { name, icon, _state, SubItems } = data;  
  
  return (
    <Fragment>
          {
            <li className="nav-item" key={name} onClick={() => ChangeState(name)  }>
              <a className={_state ? "nav-link active" : "nav-link" } href="!#" >
                <i className={icon} />
                <p>
                  {name}
                  <i className="right fas fa-angle-left" />
                  <span className="badge badge-info right"></span>
                </p>
              </a>
              <ul className="nav nav-treeview">
              {
                SubItems.map( SubItem => (
                  <SubNavItem data={SubItem} key={SubItem.name} />
                ))
              }
              </ul>
            </li>
          }
    </Fragment>
  );
}

export default NavItem;
