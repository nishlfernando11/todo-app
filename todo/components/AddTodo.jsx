import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class AddTodo extends React.Component {
    render() {
      const {handleSubmit} = this.props; // <-- get from props
      return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="todo">Add Todo </label>
                <Field name="task" component="input" type="text" />
            </div>
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
  form: "AddTodoForm", // a unique identifier for this form
  // onSubmit: _ => {} ALT SOLUTION: can pass it in here
})(AddTodo);

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);