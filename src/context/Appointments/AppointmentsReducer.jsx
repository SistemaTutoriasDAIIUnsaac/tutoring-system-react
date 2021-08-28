import { GET_APPOINTMENTS_LIST, GET_STUDENTS_LIST } from '../types'
export default (state, action) => {

  const { type, payload } = action;

  switch (type) {
    case GET_STUDENTS_LIST:
      return {
        ...state,
        studentsList: payload
      }
    case GET_APPOINTMENTS_LIST:
      return{
        ...state,
        appointmentList: payload
      }
  }

}