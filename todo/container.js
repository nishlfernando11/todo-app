import { connect } from 'react-redux';
import Todo from './Todo.jsx';
import { addTodo, updateTodo, removeTodo, completeTodo } from './actions';

const mapToProps = (state) => ({ 
        todoList: state.todoList
});

const mapDispactToProps = (dispatch) => {
    return {
        addTodo: () => dispatch(addTodo()),
        updateTodo: () => dispatch(updateTodo()),
        removeTodo: () => dispatch(removeTodo()),
        completeTodo: () => dispatch(completeTodo()),
    }
};

export default connect(mapToProps, mapDispactToProps)(Todo);