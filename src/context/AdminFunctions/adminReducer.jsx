import {
  UPLOAD_TEACHERS,
  DISTRIBUTE_STUDENTS,
  ADD_NOVELTY,
  UPLOAD_STUDENTS,
  GET_NEWS,
  UPDATE_COORDINATOR_CREDENTIALS,
  ADD_NEW_TUTORING_PROGRAM,
  ADD_NEW_PRINCIPAL  
} from "../types";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // case GET_TUTOR:
    //   return {
    //     ...state,
    //     tutor: payload
    //   }
    case UPLOAD_TEACHERS:
      return {
        ...state,
        adminMessage: payload,
      };
    case DISTRIBUTE_STUDENTS:
      return {
        ...state,
        adminMessage: payload,
      }
    case ADD_NOVELTY:
      return {
        ...state,
        newNovelty: payload
      }
    case UPLOAD_STUDENTS:
      return {
        ...state,
        adminMessage: payload,
      }
    case GET_NEWS:
      return {
        ...state,
        news: payload
      }
    case ADD_NEW_TUTORING_PROGRAM:
      return {
        ...state,
        newTutoringProgram: payload
      }
    case ADD_NEW_PRINCIPAL:
      return {
        ...state,
        newPrincipal: payload
      }
    case UPDATE_COORDINATOR_CREDENTIALS:
      return {
        ...state,
        adminMessage: payload.message
      }    
  }
};
