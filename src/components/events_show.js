import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
// redux-formに必要なメソッド
// import { Field, formValueSelector, reduxForm } from 'redux-form'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
// material-uiをインポート
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

// actionsをimportする
import { getEvent, deleteEvent, putEvent } from '../actions'

class EventsShow extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    // メソッドとonをbindする
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    // マウント時にgetEventを実行
    if (id) this.props.getEvent(id)
  }

  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field

    // {...input}でnameプロパティを設定
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    // 履歴に/を追加
    this.props.history.push('/')
  }

  async onSubmit(values) {
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render() {
    // submitの非活性にpristineを使用、連打防止にsubmitting（）reduxFormの機能
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = {
      margin: 12,
    }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          {/* Fieldタグを使用する */}
          <div>
            <Field label="Title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="Body" name="body" type="text" component={this.renderField} />
          </div>

          <RaisedButton label="submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
          <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
          <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />
        </div>
      </form>
    )
  }
}
// validateを定義
const validate = (values) => {
  const errors = {}

  if (!values.title) errors.title = 'Enter a title, please.'
  if (!values.body) errors.body = 'Enter a body, please.'

  return errors
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}

// propsに紐付け
const mapDispatchToProps = { getEvent, deleteEvent, putEvent }

// connect関数で、以下２定数を引数のEventsShowにコネクトする
export default connect(
  mapStateToProps,
  mapDispatchToProps
  // enableReinitializeをtrueにするとinitialValueの値が変わるたびにフォームが初期化される
)(reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow))
