import { REQUEST_ARE_JSON, REQUEST_CHANGE, REQUEST_NOT_JSON } from '../actions/actionTypes'

export function requestFormat(value) {
  return dispatch => {
    try {
      value = JSON.stringify(JSON.parse(value), null, 2)
      dispatch(requestChange(value))
    } catch (error) {
      dispatch(requestSubmitted())
      alert('Не JSON')
    }
  }
}

export function requestField(value) {
  return (dispatch, getState) => {
    if(!getState().requestField.isValid) {
      try {
        JSON.parse(value)
        dispatch(requestChange(value))
        dispatch(nowOk())
      } catch (e) {
        dispatch(requestChange(value))
      }
    } else dispatch(requestChange(value))
  }
}

function requestSubmitted() {
  return {
    type: REQUEST_NOT_JSON
  }
}

function nowOk() {
  return {
    type: REQUEST_ARE_JSON
  }
}

function requestChange(value) {
  return {
    type: REQUEST_CHANGE,
    payload: value
  }
}

// function requestBad() {
//   return {
//     type: REQUEST_NOT_JSON
//   }
// }