import _ from 'lodash'
import { CREATE_EVENT, READ_EVENTS, READ_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../actions'

const events = (events = {}, action) => {
  // actionのdispatchの条件分岐
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      // eventsに[data.id]: dataの要素を追加して、新しいオブジェクトを生成したものを返す
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      // idを使ったキーで再度配列を作り直す（lodash）
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      // console.log(action.id)
      // DOM内の該当idを消して再表示する（DB上は消されない）
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}

export default events
