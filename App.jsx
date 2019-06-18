import React, { Component } from 'react';
import Todos from './todo/components/Todos.jsx';
import AddTodo from './todo/components/AddTodo.jsx';
import "./todo/style.css";

class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <div>
                    <h2 className="header-banner">TODOS</h2>
                </div>
            </header>
            <AddTodo />
            <Todos />
            </div>
        )
    }
}

export default App;