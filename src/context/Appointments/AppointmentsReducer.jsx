import { GET_STUDENTS_LIST, GET_STUDENT_SELECTED, GET_APPOINTMENTS_LIST} from '../types'


export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // case GET_TUTOR:
    //   return {
    //     ...state,
    //     tutor: payload
    //   }
    case GET_STUDENTS_LIST:
      return {
        ...state,
        studentsList: payload
      }
    case GET_STUDENT_SELECTED:
      return {
        ...state,
        studentSelected: payload
      } 
    case GET_APPOINTMENTS_LIST:
      return{
        ...state,
        appointmentList: payload
      }
  }
}