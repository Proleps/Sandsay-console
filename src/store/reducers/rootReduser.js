import { combineReducers } from 'redux'
import { requestFieldReducer } from './requestField'
import { historyReducer } from './history'
import { authReducer } from './auth'

export const rootReducer = combineReducers({
  requestField: requestFieldReducer,
  history: historyReducer,
  auth: authReducer
})