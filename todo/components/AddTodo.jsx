import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

const required = value => value ? undefined : 'Required';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class AddTodo extends React.Component {
    render() {
      const { handleSubmit } = this.props; // <-- get from props
      return (
        <form onSubmit={handleSubmit}>
          <Field name="task" component={renderField} type="text" label="Add Todo" validate={[ required ]}/>
          <button type="submit">Add</button>
        </form>
      )
    }
}

const mapStateToProps = state => ({}) // <-- setup options and such
// link up desired behavior onSubmit
// this is a sample alert with the values
const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(addTodo(values))
});

AddTodo = reduxForm({
  form: "AddTodoForm" // a unique identifier for this form
  // onSubmit: _ => {} ALT SOLUTION: can pass it in here
})(AddTodo);

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);