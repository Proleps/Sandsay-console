import {REQUEST_ARE_JSON, REQUEST_CHANGE, REQUEST_NOT_JSON} from "../actions/actionTypes"

const initialState = {
  value: '{"action":"pong"}',
  isValid: true
}

export const requestFieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHANGE:
      return {
        ...state, value: action.payload
      }
    case REQUEST_ARE_JSON:
      return {
      ...state, isValid: true
      }
    case REQUEST_NOT_JSON:
      return {
        ...state, isValid: false
      }
    default: 
      return state
  }
}


// case REQUEST_SUBMITTED:
//   return {
//     ...state, isSubmitted: true
//   }
