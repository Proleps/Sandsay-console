import { AUTH_LOGOUT, AUTH_LOGIN } from '../actions/actionTypes'

export function auth(authList) {
  return dispatch => {
    let isFormValid = true
    Object.keys(authList).forEach(name => {
      isFormValid = authList[name].valid && isFormValid
    })

    if(isFormValid) {
      dispatch(authSuccess(authList))
    } else dispatch(logout())
  }
}

export function logout() {
  return {
    type: AUTH_LOGOUT
  }
}

export function authSuccess(authList) {
  return {
    type: AUTH_LOGIN,
    payload: {login: authList.login.value, sublogin: authList.sublogin.value, password: authList.password.value}
  }
}