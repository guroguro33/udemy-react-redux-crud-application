import React, { Component } from 'react'
import './App.css'
// connect関数をimportする
import { connect } from 'react-redux'
// リンク作成にreact-router-domを使用
import { Link } from 'react-router-dom'

// actionsをimportする
// import { postEvent } from '../actions'

// コンポーネントクラスを継承したEventsNewクラスを生成
class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>poke</div>
      </React.Fragment>
    )
  }
}
// 省略記法
// const mapDispatchToProps = { postEvent }

// connect関数で、以下２定数を引数のEventsNewにコネクトする
export default connect(null, null)(EventsNew)
