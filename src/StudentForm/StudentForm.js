import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { Button } from 'react-bootstrap';

import './StudentForm.css';

const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <span style={{color: 'red'}}>{error}</span>}
    </div>
)

const validate = values => {
  const errors = {}
  if(!values.name) {
    errors.name = ' Required'
  }
  if(!values.math) {
    errors.math = ' Required'
  }
  if(!values.history) {
    errors.history = ' Required'
  }
  if(!values.science) {
    errors.science = ' Required'
  }
  if(!values.english) {
    errors.english = ' Required'
  }
  return errors;
}

let StudentForm = props => {
  const { error, addStudent, handleSubmit } = props
  return (
    <form className="StudentForm-form"
          onSubmit={handleSubmit(addStudent)}>
      <div>
        <Field name="name" component={renderField} type="text" placeholder="Student Name" />
      </div>
      <div>
        <Field name="math" component={renderField} type="text" placeholder="Math Grade" />
      </div>
      <div>
        <Field name="history" component={renderField} type="text" placeholder="History Grade" />
      </div>
      <div>
        <Field name="science" component={renderField} type="text" placeholder="Science Grade" />
      </div>
      <div>
        <Field name="english" component={renderField} type="text" placeholder="English Grade" />
      </div>
      <Button type="submit">Add Student</Button>
      {error && <br /> && <strong style={{color: "red"}}>{error}</strong>}
    </form>
    
  )
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('StudentForm'));
}

StudentForm = reduxForm({
  // a unique name for the form
  form: 'StudentForm',
  onSubmitSuccess: afterSubmit,
  validate
})(StudentForm)

export default StudentForm