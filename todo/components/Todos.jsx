import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, updateTodo, removeTodo, completeTodo } from '../actions';

class Todos extends Component{
    render() {
        const { todoList, addTodo, updateTodo, removeTodo, completeTodo } = this.props;
        return(
            <div className="App">
            <ul>
            {todoList.map((todo, index) => (
                <li key={index}>{todo.task}<span></span> <button onClick={ completeTodo }>Done</button></li>
            )
            )}
            </ul>
            </div>
        );
    }
}
const mapToProps = (state) => ({ 
    todoList: state.todos.todoList
});

const mapDispactToProps = (dispatch) => {
return {
    addTodo: () => dispatch(addTodo()),
    updateTodo: () => dispatch(updateTodo()),
    removeTodo: () => dispatch(removeTodo()),
    completeTodo: () => dispatch(completeTodo()),
}
};

export default connect(mapToProps, mapDispactToProps)(Todos);
