import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createPost } from '../actions'

class NewPost extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field
    const isValid = touched && error ? 'is-invalid' : ''
    const styleValidatedField = `form-control ${isValid}`

    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className={styleValidatedField}
          type='text'
          {...field.input}
        />
      <div className='text-danger'>
          {touched ? error : null }
        </div>

      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => this.props.history.push('/'))
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name='title'
          component={this.renderField}
        />
        <Field
          label="Categories"
          name='categories'
          component={this.renderField}
        />
        <Field
          label="Content"
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  !values.title && (errors.title = 'Enter a title!')
  !values.categories && (errors.categories = 'Enter some categories!')
  !values.content && (errors.content = 'Enter some content!')

  return errors
}

export default reduxForm({
  validate,
  form: 'NewPostForm',
})(
  connect(null, { createPost })(NewPost)
)
