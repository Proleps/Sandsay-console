import {
  HISTORY_CLEAR,
  HISTORY_PUSH_ITEM,
  HISTORY_DELETE_ITEM,
  REQUEST_NOT_JSON
} from './actionTypes'

export function historyPush(value) {
  return (dispatch, getState) => {
    try {
      JSON.parse(value)
      const history = getState().history.history
      const index = history.findIndex( (item) => JSON.stringify(item) === JSON.stringify(JSON.parse(value) ))
      if( index !== -1 ){
        dispatch(deleteItem(index))
        dispatch(pushItem(value))
      } else if(history.length === 15) {
        dispatch(deleteItem(0))
        dispatch(pushItem(value))
      } else dispatch(pushItem(value))
    } catch (error) {
      alert('Не JSON')
      dispatch(requestSubmitted())
    }
  }
}

export function historyClear() {
  localStorageClearHistory()
  return {
    type: HISTORY_CLEAR
  }
}

export function deleteItem(index) {
  localStorageDeleteItem(index)
  return {
    type: HISTORY_DELETE_ITEM,
    payload: index
  }
}

function pushItem(value) {
  localStoragePushItem(value)
  return {
    type: HISTORY_PUSH_ITEM,
    payload: JSON.parse(value)
  }
}

function localStoragePushItem(value) {
  const index = localStorage.getItem('historyLength') || 0
  localStorage.setItem(`history[${index}]`, value)
  localStorage.setItem('historyLength', +index + 1)
}

function localStorageClearHistory() {
  for(let i=0; i<localStorage.getItem('historyLength'); i++) {
    localStorage.removeItem(`history[${i}]`)
  }
  localStorage.removeItem('historyLength')
}

function localStorageDeleteItem(index) {
  const quantity = localStorage.getItem('historyLength')-1
  for(let i=index; i<quantity; i++) {
    localStorage.setItem(`history[${i}]`, localStorage.getItem(`history[${i + 1}]`))
  }
  localStorage.removeItem(`history[${quantity}]`)
  localStorage.setItem('historyLength', quantity)
}

function requestSubmitted() {
  return {
    type: REQUEST_NOT_JSON
  }
}

// function notOk() {
//   return {
//     type: REQUEST_NOT_JSON
//   }
// }