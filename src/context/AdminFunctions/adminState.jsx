import React, { useReducer } from "react";
import adminReducer from "./adminReducer"
import AdminContext from "./adminContext"
import clienteAxios from "../../config/axios";


function AdminState({ children }) {
  const initialState = {
    // updateCredentials: null,
    newTutoringProgram: null,
    newPrincipal: null,
    adminMessage: null,
    newNovelty: null,
    teachersList: [],
    tutorsList : [],
    studentesList : [],
  };

  const [state, dispatch] = useReducer(adminReducer, initialState);

  // All functions
  const uploadTeachers = async (data) => {
    try {
      const res = await clienteAxios.post("/addteachers", data);
      console.log(res.data)
      dispatch({
        type: "UPLOAD_TEACHERS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const uploadStudents = async (data) => {
    try {
      const res = await clienteAxios.put("/addstudents", data);
      console.log(res.data)
      dispatch({
        type: "UPLOAD_STUDENTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const distributeStudents = async (data) => {
    try {
      const res = await clienteAxios.get("/distribute_students");
      console.log(res.data)
      dispatch({
        type: "DISTRIBUTE_STUDENTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const addNovelty = async (data) => {
    try {
      const res = await clienteAxios.post("/news", data);
      console.log(res.data)
      dispatch({
        type: "ADD_NOVELTY",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const updateCoordinatorCredentials = async (data) => {
    try {
      const res = await clienteAxios.put("/update_credentials_coordinator", data);
      console.log(res.data)
      dispatch({
        type: "UPDATE_COORDINATOR_CREDENTIALS",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "SHOW_MESSAGE",
        payload: error.res.data.message,
      })
    }
  }

  const addNewTutoringProgram = async (data) => {
    try {
      const res = await clienteAxios.post("/tutoring_programs", data);
      console.log(res.data)
      dispatch({
        type: "ADD_NEW_TUTORING_PROGRAM",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const addNewPrincipal = async (data) => {
    try {
      const res = await clienteAxios.post("/principalC", data);
      console.log(res.data)
      dispatch({
        type: "ADD_NEW_PRINCIPAL",
        payload: res.data,
      });
    } catch (error) {
      // dispatch({
      //   type: "SHOW_MESSAGE",
      //   payload: error.response.data.message
      console.log("error")
      }    
  }


  return (
    //Context provider
    <AdminContext.Provider
      value={{
        // Functions
        uploadTeachers,
        uploadStudents,
        distributeStudents,
        addNovelty,
        updateCoordinatorCredentials,
        addNewTutoringProgram,
        addNewPrincipal,
        // Values
        adminMessage: state.adminMessage,
        newNovelty: state.newNovelty,
        teachersList: state.teachersList,
        tutorsList: state.tutorsList,
        studentesList: state.studentesList,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminState;
