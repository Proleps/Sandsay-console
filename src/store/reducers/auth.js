import { AUTH_LOGOUT, AUTH_LOGIN } from '../actions/actionTypes'

const initialState = {
  isAutenticated: true,
  inputsName: {
    login: 'some@mail.com',
    sublogin:'someSublogin',
    password:''
  }
}

export const authReducer = ( state=initialState, action ) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state, isAutenticated: true, inputsName: action.payload
      }
    case AUTH_LOGOUT:
      return {
        ...state, isAutenticated: false
      }
    default:
      return {
        ...state
      }
  }
}