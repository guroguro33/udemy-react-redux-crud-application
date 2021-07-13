import _ from 'lodash'
import { READ_EVENTS } from '../actions'

const events = (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // idを使ったキーで再度配列を作り直す（lodash）
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}

export default events
