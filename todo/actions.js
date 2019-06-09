const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

const addTodo = (data) => {
    return { type: ADD_TODO, data };
}

const updateTodo = (data) => {
    return { type:UPDATE_TODO, data };
}

const removeTodo = (data) => {
    return { type: REMOVE_TODO, data };
}

const completeTodo = (data) => {
    return { type: COMPLETE_TODO, data };
}

export {
    ADD_TODO,
    UPDATE_TODO,
    REMOVE_TODO,
    COMPLETE_TODO,
    addTodo, updateTodo, removeTodo, completeTodo
}