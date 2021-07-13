import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
// 複数ある場合、列挙する
// export default combineReducers({ foo, bar, baz })
