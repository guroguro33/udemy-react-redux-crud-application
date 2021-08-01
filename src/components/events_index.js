import React, { Component } from 'react'
import './App.css'
// connect関数をimportする
import { connect } from 'react-redux'
import _ from 'lodash'
// リンク作成にreact-router-domを使用
import { Link } from 'react-router-dom'

// material-uiに必要なパーツ
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

// actionsをimportする
import { readEvents } from '../actions'
import { fixRequestBody } from 'http-proxy-middleware'

// コンポーネントクラスを継承したCounterクラスを生成
class EventsIndex extends Component {
  // マウント時に実行されるコールバック
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    // lodashのmap関数でオブジェクトを整形して返す
    return _.map(this.props.events, (event) => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style = {
      position: 'fixed',
      right: 12,
      bottom: 12,
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>TITLE</TableHeaderColumn>
              <TableHeaderColumn>BODY</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          {/* renderEventsメソッドで内容を記述する */}
          <TableBody displayRowCheckbox={false}>{this.renderEvents()}</TableBody>
        </Table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
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
