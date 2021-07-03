import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// 複数ある場合、列挙する
// export default combineReducers({ foo, bar, baz })
