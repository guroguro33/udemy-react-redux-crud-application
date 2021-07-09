import React, { Component } from 'react'
import './App.css'
// connect関数をimportする
import { connect } from 'react-redux'

// actionsをimportする
import { readEvents } from '../actions'

// コンポーネントクラスを継承したCounterクラスを生成
class EventsIndex extends Component {
  // マウント時に実行されるコールバック
  componentDidMount() {
    this.props.readEvents()
  }

  render() {
    const props = this.props
    console.log(props)
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}
// stateとactionをコンポーネントのpropsに関連づける
// stateから今回必要なvalueをキーにして返す
const mapStateToProps = (state) => ({})

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
