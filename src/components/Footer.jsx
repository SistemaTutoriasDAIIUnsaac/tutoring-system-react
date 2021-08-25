import React, { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <footer className="main-footer">
        <strong>
          Copyright © 2020-2030 <a href="https://github.com/WidmarO">WidmarO</a>
          .
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.1.0-rc
        </div>
      </footer>
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </Fragment>
  );
}
