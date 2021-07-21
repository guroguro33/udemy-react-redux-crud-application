import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
// redux-formに必要なメソッド
// import { Field, formValueSelector, reduxForm } from 'redux-form'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { div } from 'prelude-ls'

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

    return (
      <div>
        {/* inputでnameプロパティを設定 */}
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    // submitの非活性にpristineを使用、連打防止にsubmitting（）reduxFormの機能
    const { handleSubmit, pristine, submitting } = this.props

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

          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting} />
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </form>
    )
  }
}
// validateを定義
const validate = (values) => {
  const errors = {}

  if (!values.title) errors.title = 'Enter a title, please.'
  if (!values.title) errors.body = 'Enter a body, please.'

  return errors
}

// propsに紐付け
const mapDispatchToProps = { postEvent }

// connect関数で、以下２定数を引数のEventsNewにコネクトする
export default connect(null, mapDispatchToProps)(reduxForm({ validate, form: 'eventNewForm' })(EventsNew))
