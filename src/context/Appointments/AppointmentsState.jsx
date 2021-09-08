import React, { useReducer } from "react";
import AppointmentsReducer from "./AppointmentsReducer";
import AppointmentsContext from "./AppointmentsContext";
import clienteAxios from "../../config/axios";


function AppointmentsState({ children }) {
  const initialState = {
    tutor: null,
    studentsList: [],
    studentSelected: null,
    appointmentList: [],
    appointmentSelected: null,
    appointmentNew: null,
  };

  // useState is a hook that allows us to create a state variable
  // useReducer is a hook that allows us to create a state variable and a reducer function

  const [state, dispatch] = useReducer(AppointmentsReducer, initialState);

  // All functions
  const getTutor = async () => {
    const res = await clienteAxios.get("/tutor/<string:cod_tutor>");
    dispatch({
      type: "GET_TUTOR",
      payload: res.data,
    });
  };

  const getStudentsList = async () => {

    const res = await clienteAxios.get("/students");
    dispatch({
      type: "GET_STUDENTS_LIST",
      payload: res.data,
    });
  };

  const getStudentSelected = async () => {
    const res = await clienteAxios.get("/student/<string:cod_student>");
    dispatch({
      type: "GET_STUDENTS_SELECTED",
      payload: res.data,
    });
  };

  const getAppointmentList = async () => {
    const res = await clienteAxios.get("/appointments");
    dispatch({
      type: 'GET_APPOINTMENTS_LIST',      
      payload: res.data
    });
  };

  
  return (
    //Context provider
    <AppointmentsContext.Provider
      value={{
        // Functions
        getTutor,
        getStudentsList,
        getStudentSelected,
        getAppointmentList,
        // Values
        tutor: state.tutor,
        studentsList: state.studentsList,
        studentSelected: state.studentSelected,
        appointmentList: state.appointmentList,
        
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}

export default AppointmentsState;
