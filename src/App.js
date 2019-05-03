import React, {Component} from 'react';
import ToDoItem from './ToDoItem'
import todosData from './todosData'

/*
function App() {



    return (
        <div className="todo-list">
            {todosArray}
        </div>
    );
}
*/

class App extends Component {
    constructor() {
        super()
        this.state = {
            todosArray: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        console.log('changed', id)
        this.setState(prevState => {
            const updatedTodos = prevState.todosArray.map(todo => {
                if (todo.id === id ) {
                    todo.completed = !todo.completed
                }
                return todo
            });
            return {
                todosArray: updatedTodos
            }
        })

    }

    render() {
       const todosArray = this.state.todosArray.map(todo => <ToDoItem key={todo.id} props={todo} handleChange={this.handleChange} />)
        return (
            <div className="todo-list">
                {todosArray}
            </div>
        );
    }
}
export default App
