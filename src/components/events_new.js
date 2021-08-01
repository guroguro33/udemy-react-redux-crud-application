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
import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
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

  async onSubmit(values) {
    await this.props.postEvent(values)
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

// propsに紐付け
const mapDispatchToProps = { postEvent }

// connect関数で、以下２定数を引数のEventsNewにコネクトする
export default connect(null, mapDispatchToProps)(reduxForm({ validate, form: 'eventNewForm' })(EventsNew))
