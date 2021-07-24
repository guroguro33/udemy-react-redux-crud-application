import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT } from '../actions'

const events = (events = {}, action) => {
  // actionのdispatchの条件分岐
  switch (action.type) {
    case READ_EVENTS:
      // idを使ったキーで再度配列を作り直す（lodash）
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      console.log(action.id)
      // DOM内の該当idを消して再表示する（DB上は消されない）
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}

export default events
