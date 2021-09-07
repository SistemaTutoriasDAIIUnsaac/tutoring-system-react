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
  const getStudentsList = async () => {
    const res = await clienteAxios.get("/students");
    dispatch({
      type: "GET_STUDENTS_LIST",
      payload: res.data,
    });
  };

  const getAppointmentList = async () => {
    const res = await clienteAxios.get("/appointmentList");
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
        getAppointmentList,
        getStudentsList,
        // Values
        appointmentList: state.appointmentList,
        studentsList: state.studentsList,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}

export default AppointmentsState;
