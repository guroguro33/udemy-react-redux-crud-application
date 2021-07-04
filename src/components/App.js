import React, { Component } from 'react'
import './App.css'
// connect関数をimportする
import { connect } from 'react-redux'

// actionsをimportする
import { increment, decrement } from '../actions'

// コンポーネントクラスを継承したCounterクラスを生成
class App extends Component {
  render() {
    const props = this.props
    console.log(props)
    console.log(state)
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
const mapStateToProps = (state) => ({ value: state.count.value })

// actionをpropsにdispatchする
// const mapDispatchToProps = (dispatch) => ({
//   // increment関数とdecrement関数に該当のactionをdispatchして実行できる
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })

// 省略記法
const mapDispatchToProps = { increment, decrement }

// connect関数で、以下２定数を引数のAppにコネクトする
export default connect(mapStateToProps, mapDispatchToProps)(App)
