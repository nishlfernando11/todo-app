import React, { Component } from 'react';

class Todo extends Component{
    render() {
        const { todoList, addTodo, updateTodo, removeTodo, completeTodo } = this.props;
        return(
            <div className="App">
            <ul>
            {todoList.map((todo) => (
                <li>{todo.task}<span></span><button onClick={ completeTodo }>Done</button></li>
            )
            )}
            </ul>
            </div>
        );
    }
}

export default Todo;