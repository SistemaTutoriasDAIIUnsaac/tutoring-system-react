import { GET_APPOINTMENTS, GET_STUDENTS_LIST } from '../types'

export default (state, action) => {

  const { type, payload } = action;

  switch (type) {
    case GET_STUDENTS_LIST:
      return {
        ...state,
        studentsList: payload
      }
  }

}