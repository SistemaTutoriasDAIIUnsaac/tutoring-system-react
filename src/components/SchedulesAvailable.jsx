import React, { Fragment } from "react";


function SchedulesAvailable() {
  return (
    <Fragment>
      <div className="card card-secondary">
        <div className="card-header" style={{ padding: 5 }}>
          <h5 className="card-title"></h5>
        </div>
        <div className="card-body pt-2 pb-0">
          <form>
            <div className="row">
              <div className="col-sm-7">
                <div className="form-group">
                  <label>Día</label>
                  <select
                    className="form-control select2 select2-hidden-accessible"
                    style={{ width: "100%" }}
                    data-select2-id={1}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option data-select2-id={0}>Lunes</option>
                    <option data-select2-id={1}>Martes</option>
                    <option data-select2-id={2}>Miércoles</option>
                    <option data-select2-id={3}>Jueves</option>
                    <option data-select2-id={4}>Viernes</option>
                    <option data-select2-id={5}>Sábado</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default select2-container--below"
                    dir="ltr"
                    data-select2-id={2}
                    style={{ width: "100%" }}
                  >
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-group">
                  <label>Hora Inicio</label>
                  <input type="time" className="form-control" />
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-group">
                  <label>Hora Final</label>
                  <input type="time" class="form-control" />
                </div>
              </div>
              <div className="col-sm-0">
                <button
                  type="button"
                  class="btn btn-block btn-danger float-right"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default SchedulesAvailable;
