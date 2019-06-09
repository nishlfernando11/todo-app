import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, COMPLETE_TODO } from './actions';

const initialState = {
    todoList: [{'task':'my new'}, {'task': 'second'}]
};

const todoReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_TODO: {
            return state;
        }
        case UPDATE_TODO: {
            return state;
        }
        case REMOVE_TODO: {
            return state;
        }
        case COMPLETE_TODO: {
            // return state.set(state.todoList.push(action.data));
            return state;
        }
        default: 
            return state;
    }
}

export default todoReducer;