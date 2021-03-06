import React, { Fragment, useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import AppointmentsContext from "../context/Appointments/AppointmentsContext";

function Appointments({data}) {

  const appointmentsContext = useContext(AppointmentsContext)
  const { getAppointment, appointmentSelected } = appointmentsContext;

  useEffect(() => {
    // getAppointment();
    // eslint-disable-next-line
  })

  return (
    <Fragment>
      <Link to={`/Ver_cita/${data.cod_appointment}`} onClick={() => getAppointment(data.cod_appointment)}>
         <div className="card card-secondary">
        <div className="card-header" style={{ padding: 5 }}>
        
          <h5 className="card-title">Cita</h5>
          
        </div> 
        <div className="card-body pt-2 pb-0">
          <form>
            <div className="row">
              <div className="col-sm-1">
                <div className="form-group">
                  <label style={{color:"#292929"}}>N° Cita</label>
                  <div className="input-group">
                    <input type="text" className="form-control" disabled value={data.cod_appointment}/>                
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label style={{color:"#292929"}}>Fecha</label>
                  <input type="text" className="form-control" disabled value= {data.date_time}/>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="form-group">
                  <label style={{color:"#292929"}}>Descripción</label>
                  <div className="input-group">
                    <div className="input-group-prepend"></div>
                    <input type="text" class="form-control" disabled="true" value={data.general_description}/>
                  </div>
                </div>
              </div>  
            </div>
          </form>
        </div>
        
      </div>
      </Link>
    </Fragment>
  )
}

export default Appointments;
