import React, { Fragment } from "react";
import { useEffect } from "react";


function News({data}) {
  return (
    <Fragment>
      <div className="card card-secondary">
        <div className="card-header" style={{ padding: 5 }}>
          <h5 className="card-title"></h5>
        </div>
        <div className="card-body pt-2 pb-0">
          <form>
            <div className="row">
            <div className="col-sm-2">
                <div className="form-group">
                  <label>Fecha</label>
                  <input type="text" className="form-control" disabled="true" value={data.date_time}/>
                  
                </div>
              </div>
              <div className="col-sm-7">
                <div className="form-group">
                  <label>Título</label>
                  <div className="input-group">
                    <input type="text" className="form-control" disabled="true" value={data.title}/>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label>Persona</label>
                  <div className="input-group">
                    <div className="input-group-prepend"></div>
                    <input type="text" class="form-control" disabled="true" value={data.whom}>
                    </input>
                  </div>
                </div>
              </div>  
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default News;