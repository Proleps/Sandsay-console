import { HISTORY_CLEAR, HISTORY_DELETE_ITEM, HISTORY_PUSH_ITEM } from "../actions/actionTypes";

const initialState = {
  history:
    new Array(+localStorage.getItem('historyLength') )
      .fill('_')
        .map( ( item, index ) => item = JSON.parse(localStorage.getItem(`history[${index}]`))
    ) || []
}

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_PUSH_ITEM:
      return {
        ...state,
        history: state.history.concat(action.payload)
      }
    case HISTORY_CLEAR:
      return {
        ...state,
        history: []
      }
    case HISTORY_DELETE_ITEM:
      return {
        ...state,
        history: [...state.history.slice(0, action.payload), ...state.history.slice(action.payload + 1)]
      }
    default:
      return state
  }
}