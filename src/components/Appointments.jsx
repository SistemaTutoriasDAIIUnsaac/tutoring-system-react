import React, { useState, Fragment } from "react";
import axios from "axios";
const Appointments = () => {
  return (
    <Fragment>
      <div className="card card-secondary">
        <div className="card-header" style={{ padding: 5 }}>
          <h5 className="card-title">Cita</h5>
        </div>
        <div className="card-body pt-2 pb-0">
          <form>
            <div className="row">
              <div className="col-sm-1">
                <div className="form-group">
                  <label>N° Sesión</label>
                  <div className="input-group">
                    <div className="input-group-prepend"></div>
                    <input type="number" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-group">
                  <label>Fecha</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="form-group">
                  <label>Descripción</label>
                  <div className="input-group">
                    <div className="input-group-prepend"></div>
                    <input type="text" class="form-control" disabled="true"></input>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-4">
                <div className="form-group">
                  <label>Observaciones</label>
                  <div className="input-group">
                    <div className="input-group-prepend"></div>
                    <textarea
                      class="form-control"
                      rows="3"
                      disabled="true"
                    ></textarea>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-sm-2">
                <div className="form-group">
                  <button className="btn btn-danger">
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default Appointments;
