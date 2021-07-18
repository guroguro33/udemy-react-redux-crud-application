import { combineReducers } from 'redux'
// redux-formのreducerを読み込む
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
// 複数ある場合、列挙する
// export default combineReducers({ foo, bar, baz })
