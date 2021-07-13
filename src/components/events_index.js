import React, { Component } from 'react'
import './App.css'
// connect関数をimportする
import { connect } from 'react-redux'
import _ from 'lodash'

// actionsをimportする
import { readEvents } from '../actions'

// コンポーネントクラスを継承したCounterクラスを生成
class EventsIndex extends Component {
  // マウント時に実行されるコールバック
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    // lodashのmap関数でオブジェクトを整形して返す
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
          </tr>
        </thead>
        {/* renderEventsメソッドで内容を記述する */}
        <tbody>{this.renderEvents()}</tbody>
      </table>
    )
  }
}
// stateとactionをコンポーネントのpropsに関連づける
const mapStateToProps = (state) => ({ events: state.events })

// actionをpropsにdispatchする
// const mapDispatchToProps = (dispatch) => ({
//   // increment関数とdecrement関数に該当のactionをdispatchして実行できる
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })

// 省略記法
const mapDispatchToProps = { readEvents }

// connect関数で、以下２定数を引数のEventsIndexにコネクトする
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
