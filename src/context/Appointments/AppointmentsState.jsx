import React, { useReducer } from 'react';
import AppointmentsReducer from './AppointmentsReducer';
import AppointmentsContext from './AppointmentsContext';
import axios from 'axios';
import AppointmentsContext from './AppointmentsContext';


const AppointmentsState = ( { children } ) => {

  const initialState = {
    tutor: null,
    students_list: [],
    student_selected: null,
    appointment_list: [],
    appointment_selected: null,
    appointment_new: null
  }
  
  // useState is a hook that allows us to create a state variable
  // useReducer is a hook that allows us to create a state variable and a reducer function

  const [state, dispatch] = useReducer(AppointmentsReducer, initialState);

  const baseURL = "https://localhost:5000";
  // const baseURL = "https://tutoring-system-api.herokuapp.com";

  const getStudentsList = async () => {
    const res = await axios.get(baseURL + '/students');
    dispatch({
      type: 'GET_STUDENTS_LIST',
      payload: res.data
    });
  }

  <AppointmentsContext.Provider
    value={{
      // Functions
      getStudentsList,
      // Values
      students_list = state.students_list,
    }}
  >
    { children }
  </AppointmentsContext.Provider>

}

export default AppointmentsState;
