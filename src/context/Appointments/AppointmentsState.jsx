import React, { useReducer } from "react";
import AppointmentsReducer from "./AppointmentsReducer";
import AppointmentsContext from "./AppointmentsContext";
import axios from "axios";

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
  const baseURL = "https://localhost:5000";
  // const baseURL = "https://tutoring-system-api.herokuapp.com";

  // All functions
  const getStudentsList = async () => {
    const res = await axios.get(baseURL + "/students");
    dispatch({
      type: "GET_STUDENTS_LIST",
      payload: res.data,
    });
  };
  const getAppointmentList = async () => {
    const res = await axios.get(baseURL + "/appointmentList");
    dispatch({
<<<<<<< HEAD
      type: "GET_APPOINTMENTS_LIST",
      payload: res.data,
=======
      type: 'GET_APPOINTMENTS_LIST',      
      payload: res.data
>>>>>>> 2ba398833b7523749f4a18892b7dcf00ab3b791e
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
